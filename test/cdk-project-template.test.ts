import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import { IamStack } from "../lib/iam-service/stacks/iam-stack";

test("IamStack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new IamStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(haveResource("AWS::IAM::User"));

  expectCDK(stack).to(
    haveResource("AWS::IAM::Policy", {
      "PolicyDocument": {
        "Statement": [
          {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Resource": [
              {
                "Fn::Join": [
                  "",
                  [
                    "arn:aws:iam::",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    ":role/cdk-hnb659fds-cfn-exec-role-",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    "-",
                    {
                      "Ref": "AWS::Region",
                    },
                  ],
                ],
              },
              {
                "Fn::Join": [
                  "",
                  [
                    "arn:aws:iam::",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    ":role/cdk-hnb659fds-deploy-role-",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    "-",
                    {
                      "Ref": "AWS::Region",
                    },
                  ],
                ],
              },
              {
                "Fn::Join": [
                  "",
                  [
                    "arn:aws:iam::",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    ":role/cdk-hnb659fds-file-publishing-role-",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    "-",
                    {
                      "Ref": "AWS::Region",
                    },
                  ],
                ],
              },
              {
                "Fn::Join": [
                  "",
                  [
                    "arn:aws:iam::",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    ":role/cdk-hnb659fds-image-publishing-role-",
                    {
                      "Ref": "AWS::AccountId",
                    },
                    "-",
                    {
                      "Ref": "AWS::Region",
                    },
                  ],
                ],
              },
            ],
          },
        ],
        "Version": "2012-10-17",
      },
    })
  );
});
