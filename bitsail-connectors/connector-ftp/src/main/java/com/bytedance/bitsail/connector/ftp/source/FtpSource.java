/*
 * Copyright 2022-2023 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.connector.ftp.source;

import com.bytedance.bitsail.base.connector.reader.v1.Boundedness;
import com.bytedance.bitsail.base.connector.reader.v1.Source;
import com.bytedance.bitsail.base.connector.reader.v1.SourceReader;
import com.bytedance.bitsail.base.connector.reader.v1.SourceSplitCoordinator;
import com.bytedance.bitsail.base.connector.writer.v1.state.EmptyState;
import com.bytedance.bitsail.base.execution.ExecutionEnviron;
import com.bytedance.bitsail.base.extension.ParallelismComputable;
import com.bytedance.bitsail.base.parallelism.ParallelismAdvice;
import com.bytedance.bitsail.common.configuration.BitSailConfiguration;
import com.bytedance.bitsail.common.row.Row;
import com.bytedance.bitsail.common.type.TypeInfoConverter;
import com.bytedance.bitsail.common.type.filemapping.FileMappingTypeInfoConverter;
import com.bytedance.bitsail.connector.ftp.core.FtpConstants;
import com.bytedance.bitsail.connector.ftp.option.FtpReaderOptions;
import com.bytedance.bitsail.connector.ftp.source.reader.FtpSourceReader;
import com.bytedance.bitsail.connector.ftp.source.split.FtpSourceSplit;
import com.bytedance.bitsail.connector.ftp.source.split.coordinator.FtpSourceSplitCoordinator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FtpSource implements Source<Row, FtpSourceSplit, EmptyState>, ParallelismComputable {
  private static final Logger LOG = LoggerFactory.getLogger(FtpSource.class);

  private BitSailConfiguration jobConf;

  @Override
  public void configure(ExecutionEnviron execution, BitSailConfiguration readerConfiguration) {
    this.jobConf = readerConfiguration;
  }

  @Override
  public Boundedness getSourceBoundedness() {
    return Boundedness.BOUNDEDNESS;
  }

  @Override
  public SourceReader<Row, FtpSourceSplit> createReader(SourceReader.Context readerContext) {
    return new FtpSourceReader(jobConf, readerContext, readerContext.getIndexOfSubtask());
  }

  @Override
  public SourceSplitCoordinator<FtpSourceSplit, EmptyState> createSplitCoordinator(SourceSplitCoordinator.Context<FtpSourceSplit, EmptyState> coordinatorContext) {
    return new FtpSourceSplitCoordinator(coordinatorContext, jobConf);
  }

  @Override
  public String getReaderName() {
    return FtpConstants.FTP_CONNECTOR_NAME;
  }

  @Override
  public TypeInfoConverter createTypeInfoConverter() {
    return new FileMappingTypeInfoConverter(getReaderName());
  }

  @Override
  public ParallelismAdvice getParallelismAdvice(BitSailConfiguration commonConf, BitSailConfiguration selfConf, ParallelismAdvice upstreamAdvice) {
    int parallelism;
    if (selfConf.fieldExists(FtpReaderOptions.READER_PARALLELISM_NUM)) {
      parallelism = selfConf.get(FtpReaderOptions.READER_PARALLELISM_NUM);
    } else {
      parallelism = 1;
    }

    return new ParallelismAdvice(false, parallelism);
  }
}
