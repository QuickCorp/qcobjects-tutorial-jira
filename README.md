# Using QCObjects and Jira

The following tutorial if about using QCObjects and Jira together.

It is always needed to track our development tasks and sometimes it is hard to do it day by day just because the activity of reviewing the issues is not easy enough.

QCObjects has a built-in integration with Jira that is helping developers to review the pending task issues straight from the shell terminal. So you can stop checking out the jira project's website everytime you need to know what is pending to be coded.

# Jira Account

To work with this integration you need a Jira account. You can make one [here](https://www.atlassian.com/software/jira/free)

# Jira login and create a project

Once you have a Jira account, you can login to your account and create a new project

Login to Jira [here](https://id.atlassian.com/login)

# Jira Environment variables

Before you start to use the QCObjects Jira Built-In integration, you need to setup some environment variables

## JIRA User Name Environment Variable

```shell
> export JIRA_USERNAME=<your user name>
```

## JIRA User Token Environment Variable

```shell
> export JIRA_TOKEN=<your user token>
```

NOTE: You need to use a user token, to create one just go to [https://id.atlassian.com/manage/api-tokens](https://id.atlassian.com/manage/api-tokens)

## JIRA Project Environment Variable

```shell
export JIRA_PROJECT=<project key>
```

# Making available the Jira Built-In Integration

If you have a config.json you need to add the following, otherwise if you don't have a config.json file you need to create one and add the following:

```json
{
  "devmode": "debug",
  "domain":"<your domain name or localhost>",
  "jira": {
    "domain": "$ENV(JIRA_DOMAIN)",
    "username": "$ENV(JIRA_USERNAME)",
    "auth_token": "$ENV(JIRA_TOKEN)",
    "project": "$ENV(JIRA_PROJECT)"
  }
}
```

# Using the integration to quick check the pending issues from the CLI

Once you have created or edited your config.json file, and set up the environment variables, everytime you need to check out what is pending in Jira, you don't need to go through the Jira website anymore, you can now view the pending issues from the CLI using the following easy single line:

```shell
> qcobjects jira issues
```

Enjoy!
