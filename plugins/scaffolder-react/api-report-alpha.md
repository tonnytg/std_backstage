## API Report File for "@backstage/plugin-scaffolder-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiHolder } from '@backstage/core-plugin-api';
import { ComponentType } from 'react';
import { CustomFieldValidator } from '@backstage/plugin-scaffolder-react';
import { Dispatch } from 'react';
import { FieldExtensionOptions } from '@backstage/plugin-scaffolder-react';
import { FieldValidation } from '@rjsf/utils';
import { FormProps } from '@backstage/plugin-scaffolder-react';
import { IconComponent } from '@backstage/core-plugin-api';
import { JsonObject } from '@backstage/types';
import { JsonValue } from '@backstage/types';
import { LayoutOptions } from '@backstage/plugin-scaffolder-react';
import { Overrides } from '@material-ui/core/styles/overrides';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReviewStepProps } from '@backstage/plugin-scaffolder-react';
import { ScaffolderRJSFFormProps } from '@backstage/plugin-scaffolder-react';
import { ScaffolderStep } from '@backstage/plugin-scaffolder-react';
import { ScaffolderTaskOutput } from '@backstage/plugin-scaffolder-react';
import { SetStateAction } from 'react';
import { StyleRules } from '@material-ui/core/styles/withStyles';
import { TaskStep } from '@backstage/plugin-scaffolder-common';
import { TemplateEntityV1beta3 } from '@backstage/plugin-scaffolder-common';
import { TemplateGroupFilter } from '@backstage/plugin-scaffolder-react';
import { TemplateParameterSchema } from '@backstage/plugin-scaffolder-react';
import { TemplatePresentationV1beta3 } from '@backstage/plugin-scaffolder-common';
import { UiSchema } from '@rjsf/utils';
import { WidgetProps } from '@rjsf/utils';

// @alpha (undocumented)
export type BackstageOverrides = Overrides & {
  [Name in keyof ScaffolderReactComponentsNameToClassKey]?: Partial<
    StyleRules<ScaffolderReactComponentsNameToClassKey[Name]>
  >;
};

// @alpha (undocumented)
export const createAsyncValidators: (
  rootSchema: JsonObject,
  validators: Record<
    string,
    undefined | CustomFieldValidator<unknown, unknown>
  >,
  context: {
    apiHolder: ApiHolder;
  },
) => (formData: JsonObject) => Promise<FormValidation>;

// @alpha
export const createFieldValidation: () => FieldValidation;

// @alpha
export const DefaultTemplateOutputs: (props: {
  output?: ScaffolderTaskOutput;
}) => React_2.JSX.Element | null;

// @alpha (undocumented)
export const EmbeddableWorkflow: (props: WorkflowProps) => React_2.JSX.Element;

// @alpha
export const extractSchemaFromStep: (inputStep: JsonObject) => {
  uiSchema: UiSchema;
  schema: JsonObject;
};

// @alpha
export const Form: (
  props: PropsWithChildren<ScaffolderRJSFFormProps>,
) => React_2.JSX.Element;

// @alpha (undocumented)
export type FormValidation = {
  [name: string]: FieldValidation | FormValidation;
};

// @alpha
export interface ParsedTemplateSchema {
  // (undocumented)
  description?: string;
  // (undocumented)
  mergedSchema: JsonObject;
  // (undocumented)
  schema: JsonObject;
  // (undocumented)
  title: string;
  // (undocumented)
  uiSchema: UiSchema;
}

// @alpha
export const ReviewState: (props: ReviewStateProps) => React_2.JSX.Element;

// @alpha
export type ReviewStateProps = {
  schemas: ParsedTemplateSchema[];
  formState: JsonObject;
};

// @alpha
export const ScaffolderField: (
  props: PropsWithChildren<ScaffolderFieldProps>,
) => React_2.JSX.Element;

// @alpha
export interface ScaffolderFieldProps {
  // (undocumented)
  disabled?: boolean;
  // (undocumented)
  displayLabel?: boolean;
  // (undocumented)
  errors?: ReactElement;
  // (undocumented)
  help?: ReactElement;
  // (undocumented)
  rawDescription?: string;
  // (undocumented)
  rawErrors?: string[];
  // (undocumented)
  rawHelp?: string;
  // (undocumented)
  required?: boolean;
}

// @alpha (undocumented)
export function ScaffolderPageContextMenu(
  props: ScaffolderPageContextMenuProps,
): React_2.JSX.Element | null;

// @alpha (undocumented)
export type ScaffolderPageContextMenuProps = {
  onEditorClicked?: () => void;
  onActionsClicked?: () => void;
  onTasksClicked?: () => void;
  onCreateClicked?: () => void;
};

// @alpha (undocumented)
export type ScaffolderReactComponentsNameToClassKey = {
  ScaffolderReactTemplateCategoryPicker: ScaffolderReactTemplateCategoryPickerClassKey;
};

// @alpha (undocumented)
export type ScaffolderReactTemplateCategoryPickerClassKey = 'root' | 'label';

// @alpha
export const SecretWidget: (
  props: Pick<
    WidgetProps,
    'name' | 'onChange' | 'schema' | 'required' | 'disabled'
  >,
) => React_2.JSX.Element;

// @alpha
export const Stepper: (stepperProps: StepperProps) => React_2.JSX.Element;

// @alpha
export type StepperProps = {
  manifest: TemplateParameterSchema;
  extensions: FieldExtensionOptions<any, any>[];
  templateName?: string;
  formProps?: FormProps;
  initialState?: Record<string, JsonValue>;
  onCreate: (values: Record<string, JsonValue>) => Promise<void>;
  components?: {
    ReviewStepComponent?: ComponentType<ReviewStepProps>;
    ReviewStateComponent?: (props: ReviewStateProps) => JSX.Element;
    backButtonText?: ReactNode;
    createButtonText?: ReactNode;
    reviewButtonText?: ReactNode;
  };
  layouts?: LayoutOptions[];
};

// @alpha
export const TaskLogStream: (props: {
  logs: {
    [k: string]: string[];
  };
}) => React_2.JSX.Element;

// @alpha
export const TaskSteps: (props: TaskStepsProps) => React_2.JSX.Element;

// @alpha
export interface TaskStepsProps {
  // (undocumented)
  activeStep?: number;
  // (undocumented)
  isComplete?: boolean;
  // (undocumented)
  isError?: boolean;
  // (undocumented)
  steps: (TaskStep & ScaffolderStep)[];
}

// @alpha
export const TemplateCard: (props: TemplateCardProps) => React_2.JSX.Element;

// @alpha
export interface TemplateCardProps {
  // (undocumented)
  additionalLinks?: {
    icon: IconComponent;
    text: string;
    url: string;
  }[];
  // (undocumented)
  onSelected?: (template: TemplateEntityV1beta3) => void;
  // (undocumented)
  template: TemplateEntityV1beta3;
}

// @alpha
export const TemplateCategoryPicker: () => React_2.JSX.Element | null;

// @alpha
export const TemplateGroup: (
  props: TemplateGroupProps,
) => React_2.JSX.Element | null;

// @alpha
export interface TemplateGroupProps {
  // (undocumented)
  components?: {
    CardComponent?: React_2.ComponentType<TemplateCardProps>;
  };
  // (undocumented)
  onSelected: (template: TemplateEntityV1beta3) => void;
  // (undocumented)
  templates: {
    template: TemplateEntityV1beta3;
    additionalLinks?: {
      icon: IconComponent;
      text: string;
      url: string;
    }[];
  }[];
  // (undocumented)
  title: React_2.ReactNode;
}

// @alpha (undocumented)
export const TemplateGroups: (
  props: TemplateGroupsProps,
) => React_2.JSX.Element | null;

// @alpha (undocumented)
export interface TemplateGroupsProps {
  // (undocumented)
  additionalLinksForEntity?: (template: TemplateEntityV1beta3) => {
    icon: IconComponent;
    text: string;
    url: string;
  }[];
  // (undocumented)
  groups: TemplateGroupFilter[];
  // (undocumented)
  onTemplateSelected?: (template: TemplateEntityV1beta3) => void;
  // (undocumented)
  TemplateCardComponent?: React_2.ComponentType<{
    template: TemplateEntityV1beta3;
  }>;
  // (undocumented)
  templateFilter?: (entity: TemplateEntityV1beta3) => boolean;
}

// @alpha
export const useFilteredSchemaProperties: (
  manifest: TemplateParameterSchema | undefined,
) => TemplateParameterSchema | undefined;

// @alpha
export const useFormDataFromQuery: (
  initialState?: Record<string, JsonValue>,
) => [Record<string, any>, Dispatch<SetStateAction<Record<string, any>>>];

// @alpha (undocumented)
export const useTemplateParameterSchema: (templateRef: string) => {
  manifest: TemplateParameterSchema | undefined;
  loading: boolean;
  error: Error | undefined;
};

// @alpha
export const useTemplateSchema: (manifest: TemplateParameterSchema) => {
  steps: ParsedTemplateSchema[];
  presentation?: TemplatePresentationV1beta3 | undefined;
};

// @alpha (undocumented)
export const Workflow: (workflowProps: WorkflowProps) => JSX.Element | null;

// @alpha (undocumented)
export type WorkflowProps = {
  title?: string;
  description?: string;
  namespace: string;
  templateName: string;
  components?: {
    ReviewStepComponent?: React_2.ComponentType<ReviewStepProps>;
  };
  onError(error: Error | undefined): JSX.Element | null;
} & Pick<
  StepperProps,
  | 'extensions'
  | 'formProps'
  | 'components'
  | 'onCreate'
  | 'initialState'
  | 'layouts'
>;

// (No @packageDocumentation comment for this package)
```