## API Report File for "@backstage/plugin-catalog-backend-module-bitbucket-server"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BitbucketServerIntegrationConfig } from '@backstage/integration';
import { Config } from '@backstage/config';
import { Entity } from '@backstage/catalog-model';
import { EntityProvider } from '@backstage/plugin-catalog-node';
import { EntityProviderConnection } from '@backstage/plugin-catalog-node';
import { LocationSpec } from '@backstage/plugin-catalog-node';
import { LoggerService } from '@backstage/backend-plugin-api';
import { Response as Response_2 } from 'node-fetch';
import { SchedulerService } from '@backstage/backend-plugin-api';
import { SchedulerServiceTaskRunner } from '@backstage/backend-plugin-api';

// @public
export class BitbucketServerClient {
  constructor(options: { config: BitbucketServerIntegrationConfig });
  // (undocumented)
  static fromConfig(options: {
    config: BitbucketServerIntegrationConfig;
  }): BitbucketServerClient;
  // (undocumented)
  getFile(options: {
    projectKey: string;
    repo: string;
    path: string;
  }): Promise<Response_2>;
  // (undocumented)
  getRepository(options: {
    projectKey: string;
    repo: string;
  }): Promise<BitbucketServerRepository>;
  // (undocumented)
  listProjects(options: {
    listOptions?: BitbucketServerListOptions;
  }): Promise<BitbucketServerPagedResponse<BitbucketServerProject>>;
  // (undocumented)
  listRepositories(options: {
    projectKey: string;
    listOptions?: BitbucketServerListOptions;
  }): Promise<BitbucketServerPagedResponse<BitbucketServerRepository>>;
  // (undocumented)
  resolvePath(options: { projectKey: string; repo: string; path: string }): {
    path: string;
  };
}

// @public
export class BitbucketServerEntityProvider implements EntityProvider {
  // (undocumented)
  connect(connection: EntityProviderConnection): Promise<void>;
  // (undocumented)
  static fromConfig(
    config: Config,
    options: {
      logger: LoggerService;
      parser?: BitbucketServerLocationParser;
      schedule?: SchedulerServiceTaskRunner;
      scheduler?: SchedulerService;
    },
  ): BitbucketServerEntityProvider[];
  // (undocumented)
  getProviderName(): string;
  // (undocumented)
  refresh(logger: LoggerService): Promise<void>;
}

// @public (undocumented)
export type BitbucketServerListOptions = {
  [key: string]: number | undefined;
  limit?: number | undefined;
  start?: number | undefined;
};

// @public
export type BitbucketServerLocationParser = (options: {
  client: BitbucketServerClient;
  location: LocationSpec;
  logger: LoggerService;
}) => AsyncIterable<Entity>;

// @public (undocumented)
export type BitbucketServerPagedResponse<T> = {
  size: number;
  limit: number;
  start: number;
  isLastPage: boolean;
  values: T[];
  nextPageStart: number;
};

// @public (undocumented)
export type BitbucketServerProject = {
  key: string;
};

// @public (undocumented)
export type BitbucketServerRepository = {
  project: {
    key: string;
  };
  slug: string;
  description: string;
  links: Record<
    string,
    {
      href: string;
    }[]
  >;
  archived: boolean;
};
```