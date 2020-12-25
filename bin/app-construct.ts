import * as cdk from "@aws-cdk/core";

import { IamStack } from "../lib/iam-service/stacks/iam-stack";

export class AppConstruct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new IamStack(this, "IamStack");
  }
}
