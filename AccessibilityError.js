
Search job log
Running with gitlab-runner 17.10.0 (67b2b2db)
  on i2iv-unified-ec2-gitlabrunner Lr32vo-xP, system ID: s_34f71ee9b3f5
Resolving secrets
Preparing the "docker" executor
00:05
Using Docker executor with image hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build:20.13-alpine3.181 ...
Using helper image:  ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1  (overridden, default would be  registry.gitlab.com/gitlab-org/gitlab-runner/gitlab-runner-helper:x86_64-v17.10.0 )
Authenticating with credentials from /root/.docker/config.json
Pulling docker image ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1 ...
Using docker image sha256:c19b62135e9d1a445b85bbc61732dfbe827ee52d13475e697b288146bcfaaeae for ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1 with digest ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper@sha256:8cc17d012e1583f5ae49070a0525a0accdb866315ccc24f4f3a654ef6c1dfab5 ...
Using helper image:  ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1  (overridden, default would be  registry.gitlab.com/gitlab-org/gitlab-runner/gitlab-runner-helper:x86_64-v17.10.0 )
Using docker image sha256:c19b62135e9d1a445b85bbc61732dfbe827ee52d13475e697b288146bcfaaeae for ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1 with digest ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper@sha256:8cc17d012e1583f5ae49070a0525a0accdb866315ccc24f4f3a654ef6c1dfab5 ...
Authenticating with credentials from /root/.docker/config.json
Pulling docker image hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build:20.13-alpine3.181 ...
Using docker image sha256:bc7b7125164e033e6b2105d16c0d77b520410e6cc9103bfcb5ad1c8eafc1de2c for hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build:20.13-alpine3.181 with digest hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build@sha256:3999523cf359f3072000fae78fbd9e89c8d27c68d160323acb7c1216ee2f7640 ...
Preparing environment
00:01
Using helper image:  ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1  (overridden, default would be  registry.gitlab.com/gitlab-org/gitlab-runner/gitlab-runner-helper:x86_64-v17.10.0 )
Using docker image sha256:c19b62135e9d1a445b85bbc61732dfbe827ee52d13475e697b288146bcfaaeae for ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper:v16.11.1 with digest ev6v-docker-np.oneartifactoryci.verizon.com/vzw/ev6v/build-env/gitlab-runner-helper@sha256:8cc17d012e1583f5ae49070a0525a0accdb866315ccc24f4f3a654ef6c1dfab5 ...
Running on runner-lr32vo-xp-project-114954-concurrent-0 via 10-74-176-191.ebiz.verizon.com...
Getting source from Git repository
00:03
Fetching changes with git depth set to 50...
Reinitialized existing Git repository in /builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/.git/
Created fresh repository.
Checking out 8640cbdd as detached HEAD (ref is refs/merge-requests/35264/head)...
Removing app/.scannerwork/
Removing app/build.log
Removing app/coverage.zip
Removing app/coverage/
Removing app/output.json
Removing app/package.json.bak
Removing app/scripts/GitlabCI/
Removing app/sonar.zip
Removing node_modules/
Skipping Git submodules setup
Executing "step_script" stage of the job script
06:33
Using docker image sha256:bc7b7125164e033e6b2105d16c0d77b520410e6cc9103bfcb5ad1c8eafc1de2c for hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build:20.13-alpine3.181 with digest hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build@sha256:3999523cf359f3072000fae78fbd9e89c8d27c68d160323acb7c1216ee2f7640 ...
$ echo "Preparing test data..."
Preparing test data...
$ echo $CI_COMMIT_SHA
8640cbdd7d06e0fc04223ef19cffe8304bd35c98
$ echo "Running the build..."
Running the build...
$ sleep 10
$ if [ -n "$BASE_DIR" ]; then # collapsed multi-line command
Changed directory to: app
$ export http_proxy=
$ export https_proxy=
$ export no_proxy=
$ export HTTP_PROXY=
$ export HTTPS_PROXY=
$ export NO_PROXY=
$ export WORKERS=$WORKERS
$ curl -k -s -u SVC-edge-tool:Go#P8AndXh5Eo9y@ "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/master/script.zip" -o script.zip
$ unzip script.zip -d ./playwright
Archive:  script.zip
  inflating: ./playwright/baseTestExtension.ts  
  inflating: ./playwright/pipelinee2e.sh  
  inflating: ./playwright/Playwright-README.md  
  inflating: ./playwright/evConfig.json  
   creating: ./playwright/scripts/
  inflating: ./playwright/scripts/accessibility-validation.js  
  inflating: ./playwright/scripts/accessibility-precheck.js  
  inflating: ./playwright/scripts/common.js  
  inflating: ./playwright/scripts/accessibility-dbconnection.js  
  inflating: ./playwright/playwright.config.ts  
  inflating: ./playwright/playwright.global.ts  
  inflating: ./playwright/test.sh    
$ ./playwright/pipelinee2e.sh
evConfig.json moved one folder up.
https://gitlab.verizon.com/api/v4/projects/114954/merge_requests/35264/changes
Changed files : 
app/mock/orders/get/lp.json app/mock/orders/post/details.json app/src/app/orders/pages/Details/Returns.jsx
npm warn deprecated workbox-google-analytics@4.3.1: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
npm warn deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm warn deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm warn deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm warn deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm warn deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm warn deprecated sane@4.1.0: some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm warn deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
npm warn deprecated
npm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
npm warn deprecated move-concurrently@1.0.1: This package is no longer supported.
npm warn deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm warn deprecated left-pad@1.3.0: use String.prototype.padStart()
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated har-validator@5.1.5: this library is no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
npm warn deprecated fs-write-stream-atomic@1.0.10: This package is no longer supported.
npm warn deprecated figgy-pudding@3.5.2: This module is no longer supported.
npm warn deprecated eslint-loader@4.0.2: This loader has been deprecated. Please use eslint-webpack-plugin
npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead
npm warn deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm warn deprecated cuid@2.1.8: Cuid and other k-sortable and non-cryptographic ids (Ulid, ObjectId, KSUID, all UUIDs) are all insecure. Use @paralleldrive/cuid2 instead.
npm warn deprecated copy-concurrently@1.0.5: This package is no longer supported.
npm warn deprecated babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm warn deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
npm warn deprecated @humanwhocodes/config-array@0.5.0: Use @eslint/config-array instead
npm warn deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm warn deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm warn deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm warn deprecated @humanwhocodes/object-schema@1.2.1: Use @eslint/object-schema instead
npm warn deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
npm warn deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm warn deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated rimraf@2.6.3: Rimraf versions prior to v4 are no longer supported
npm warn deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated domexception@1.0.1: Use your platform's native DOMException instead
npm warn deprecated eslint-loader@3.0.3: This loader has been deprecated. Please use eslint-webpack-plugin
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated html-webpack-plugin@4.0.0-beta.11: please switch to a stable version
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated domexception@2.0.1: Use your platform's native DOMException instead
npm warn deprecated elasticsearch@16.7.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated domexception@1.0.1: Use your platform's native DOMException instead
npm warn deprecated domexception@2.0.1: Use your platform's native DOMException instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-property-in-object instead.
npm warn deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-property-in-object instead.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated airbnb-prop-types@2.16.0: This package has been renamed to 'prop-types-tools'
npm warn deprecated eslint@7.32.0: This version is no longer supported. Please see https://eslint.org/version-support for other options.
npm warn deprecated eslint@6.8.0: This version is no longer supported. Please see https://eslint.org/version-support for other options.
> simple@1.0.0 prepare
> rimraf .husky && mkdir .husky && cd .. && husky install app/.husky && cd ./app && node ./config/husky.js
husky - Git hooks installed
added 4461 packages, and audited 4462 packages in 1m
277 packages are looking for funding
  run `npm fund` for details
228 vulnerabilities (2 low, 134 moderate, 50 high, 42 critical)
To address issues that do not require attention, run:
  npm audit fix
To address all issues possible (including breaking changes), run:
  npm audit fix --force
Some issues need review, and may require choosing
a different dependency.
Run `npm audit` for details.
added 69 packages, changed 1 package, and audited 4531 packages in 12s
285 packages are looking for funding
  run `npm fund` for details
228 vulnerabilities (2 low, 134 moderate, 50 high, 42 critical)
To address issues that do not require attention, run:
  npm audit fix
To address all issues possible (including breaking changes), run:
  npm audit fix --force
Some issues need review, and may require choosing
a different dependency.
Run `npm audit` for details.
{
  CI_SERVER_REVISION: 'e95b84d9535',
  FF_USE_WINDOWS_LEGACY_PROCESS_STRATEGY: 'false',
  GITLAB_USER_LOGIN: 'VENGABA',
  CI_COMMIT_SHORT_SHA: '8640cbdd',
  FF_SCRIPT_SECTIONS: 'false',
  CI_SERVER_VERSION_PATCH: '8',
  FF_POSIXLY_CORRECT_ESCAPES: 'false',
  CI_DEPENDENCY_PROXY_PASSWORD: '[MASKED]',
  HTTPS_PROXY: '',
  CI_DEPENDENCY_PROXY_SERVER: 'gitlab.verizon.com:443',
  CI_MERGE_REQUEST_TARGET_BRANCH_PROTECTED: 'true',
  no_proxy: '',
  FF_USE_DUMB_INIT_WITH_KUBERNETES_EXECUTOR: 'false',
  CI_PROJECT_NAME: 'onevz-soe-digital-orders-static',
  FF_USE_LEGACY_S3_CACHE_ADAPTER: 'false',
  CI_SERVER_PROTOCOL: 'https',
  FF_USE_LEGACY_KUBERNETES_EXECUTION_STRATEGY: 'false',
  CI_RUNNER_REVISION: '67b2b2db',
  FF_LOG_IMAGES_CONFIGURED_FOR_JOB: 'false',
  CI: 'true',
  NODE_VERSION: '20.13.1',
  HOSTNAME: 'runner-lr32vo-xp-project-114954-concurrent-0',
  YARN_VERSION: '1.22.19',
  CI_COMMIT_DESCRIPTION: '',
  CI_JOB_STAGE: 'build',
  CI_PROJECT_DESCRIPTION: '',
  CI_SERVER_VERSION: '17.1.8-ee',
  CI_MERGE_REQUEST_SOURCE_PROJECT_ID: '114954',
  SHLVL: '4',
  CI_DEPENDENCY_PROXY_USER: 'gitlab-ci-token',
  FF_DISABLE_POWERSHELL_STDIN: 'false',
  HOME: '/root',
  FF_DISABLE_AUTOMATIC_TOKEN_ROTATION: 'false',
  CI_PROJECT_ROOT_NAMESPACE: 'B6NV_MYVWEB',
  FF_CLEAN_UP_FAILED_CACHE_EXTRACT: 'false',
  OLDPWD: '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static',
  FF_NETWORK_PER_BUILD: 'false',
  NO_PROXY: '',
  CI_COMMIT_REF_NAME: 'act150-3452/UPSdroppOff',
  CI_SERVER_HOST: 'gitlab.verizon.com',
  CI_JOB_ID: '41291341',
  CI_RUNNER_VERSION: '17.10.0',
  CI_MERGE_REQUEST_TARGET_BRANCH_SHA: '',
  CI_PIPELINE_SOURCE: 'merge_request_event',
  FF_RESOLVE_FULL_TLS_CHAIN: 'false',
  FF_SKIP_NOOP_BUILD_STAGES: 'true',
  CI_MERGE_REQUEST_SOURCE_BRANCH_NAME: 'act150-3452/UPSdroppOff',
  CI_MERGE_REQUEST_SOURCE_PROJECT_PATH: 'B6NV_MYVWEB/onevz-soe-digital-orders-static',
  FF_USE_WINDOWS_JOB_OBJECT: 'false',
  CI_DEFAULT_BRANCH: 'main',
  CI_BUILDS_DIR: '/builds',
  CI_SERVER_VERSION_MAJOR: '17',
  FF_USE_FASTZIP: 'false',
  CI_REGISTRY_PASSWORD: '[MASKED]',
  CI_COMMIT_REF_PROTECTED: 'false',
  CI_SERVER_URL: 'https://gitlab.verizon.com',
  CI_TEMPLATE_REGISTRY_HOST: 'registry.gitlab.com',
  CI_MERGE_REQUEST_DIFF_ID: '67177247',
  GITLAB_FEATURES: 'audit_events,blocked_issues,board_iteration_lists,code_owners,code_review_analytics,full_codequality_report,group_activity_analytics,group_bulk_edit,issuable_default_templates,issue_weights,iterations,ldap_group_sync,merge_request_approvers,milestone_charts,multiple_issue_assignees,multiple_ldap_servers,multiple_merge_request_assignees,multiple_merge_request_reviewers,project_merge_request_analytics,protected_refs_for_users,push_rules,resource_access_token,seat_link,seat_usage_quotas,pipelines_usage_quotas,transfer_usage_quotas,product_analytics_usage_quotas,wip_limits,zoekt_code_search,blocked_work_items,description_diffs,send_emails_from_admin_area,repository_size_limit,maintenance_mode,scoped_issue_board,contribution_analytics,group_webhooks,member_lock,elastic_search,repository_mirrors,ai_chat,adjourned_deletion_for_projects_and_groups,admin_audit_log,auditor_user,blocking_merge_requests,board_assignee_lists,board_milestone_lists,ci_secrets_management,ci_pipeline_cancellation_restrictions,cluster_agents_ci_impersonation,cluster_agents_user_impersonation,cluster_deployments,code_owner_approval_required,code_suggestions,commit_committer_check,commit_committer_name_check,compliance_framework,custom_compliance_frameworks,custom_file_templates,custom_project_templates,cycle_analytics_for_groups,cycle_analytics_for_projects,db_load_balancing,default_branch_protection_restriction_in_groups,default_project_deletion_protection,delete_unconfirmed_users,dependency_proxy_for_packages,disable_name_update_for_users,disable_personal_access_tokens,domain_verification,epics,extended_audit_events,external_authorization_service_api_management,feature_flags_code_references,file_locks,geo,generic_alert_fingerprinting,git_two_factor_enforcement,group_allowed_email_domains,group_coverage_reports,group_forking_protection,group_milestone_project_releases,group_project_templates,group_repository_analytics,group_saml,group_scoped_ci_variables,ide_schema_config,incident_metric_upload,instance_level_scim,jira_issues_integration,ldap_group_sync_filter,merge_request_performance_metrics,admin_merge_request_approvers_rules,merge_trains,metrics_reports,metrics_observability,logs_observability,multiple_alert_http_integrations,multiple_approval_rules,multiple_group_issue_boards,object_storage,microsoft_group_sync,operations_dashboard,package_forwarding,pages_size_limit,pages_multiple_versions,productivity_analytics,project_aliases,protected_environments,reject_non_dco_commits,reject_unsigned_commits,remote_development,saml_group_sync,service_accounts,scoped_labels,smartcard_auth,ssh_certificates,swimlanes,target_branch_rules,type_of_work_analytics,minimal_access_role,unprotection_restrictions,ci_project_subscriptions,incident_timeline_view,oncall_schedules,escalation_policies,zentao_issues_integration,coverage_check_approval_rule,issuable_resource_links,group_protected_branches,group_level_merge_checks_setting,oidc_client_groups_claim,disable_deleting_account_for_users,disable_private_profiles,group_saved_replies,requested_changes_block_merge_request,project_saved_replies,group_ip_restriction,issues_analytics,password_complexity,group_wikis,email_additional_text,custom_file_templates_for_namespace,incident_sla,export_user_permissions,cross_project_pipelines,feature_flags_related_issues,merge_pipelines,ci_cd_projects,github_integration',
  CI_REGISTRY_IMAGE: 'gitlab.verizon.com:4567/b6nv_myvweb/onevz-soe-digital-orders-static',
  CI_PROJECT_ID: '114954',
  CI_MERGE_REQUEST_SOURCE_BRANCH_PROTECTED: 'false',
  CI_COMMIT_SHA: '8640cbdd7d06e0fc04223ef19cffe8304bd35c98',
  GITLAB_CI: 'true',
  FF_USE_LEGACY_GCS_CACHE_ADAPTER: 'false',
  FF_RETRIEVE_POD_WARNING_EVENTS: 'true',
  CI_CONCURRENT_ID: '2',
  CI_REGISTRY_USER: 'gitlab-ci-token',
  FF_USE_DOCKER_AUTOSCALER_DIAL_STDIO: 'true',
  CI_SERVER_PORT: '443',
  https_proxy: '',
  CI_MERGE_REQUEST_SQUASH_ON_MERGE: 'false',
  FF_DISABLE_UMASK_FOR_DOCKER_EXECUTOR: 'false',
  CI_PROJECT_PATH: 'B6NV_MYVWEB/onevz-soe-digital-orders-static',
  CI_MERGE_REQUEST_PROJECT_URL: 'https://gitlab.verizon.com/B6NV_MYVWEB/onevz-soe-digital-orders-static',
  CI_PROJECT_DIR: '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static',
  CI_PROJECT_NAMESPACE: 'B6NV_MYVWEB',
  FF_WAIT_FOR_POD_TO_BE_REACHABLE: 'false',
  FF_ENABLE_JOB_CLEANUP: 'false',
  CI_COMMIT_TIMESTAMP: '2025-05-26T19:15:47+05:30',
  http_proxy: '',
  _: './playwright/pipelinee2e.sh',
  CI_SERVER_NAME: 'GitLab',
  FF_USE_DIRECT_DOWNLOAD: 'true',
  CI_MERGE_REQUEST_DESCRIPTION: '# Feature Flag Governance\n' +
    '\n' +
    "- As part of feature flag governance, submitted Merge Requests will be scanned. If the code includes a valid feature flag or contains only test cases, configuration files, HTML, CSS, or JavaScript files, the feature flag governance approval rule will be automatically approved by the Unified Pipeline's Merge Request BOT. For all other changes, please provide the following information:\n" +
    '\n' +
    '**Feature Flag Name:** `{{upsReturnContentUpdateFFlag}}`\n' +
    '**Configuration Profile Name:** `{{MVOStreamlinedSales}}`\n' +
    '**Application Name:** `{{FWA-Digital}}`\n' +
    '\n' +
    '# Merge Request Summary\n' +
    '\n' +
    '<details>\n' +
    '  <summary>Details</summary>\n' +
    '  \n' +
    '- **Summary of the Merge Request**\n' +
    '\n' +
    '  <!-- Please provide a summary of the Merge Request. -->\n' +
    '\n' +
    '- **Screenshots or Screen Recordings of the working code**\n' +
    '\n' +
    '  <!-- Screenshots are required for UI changes and are strongly recommended for all other merge requests. Please include before and after images or recordings to demonstrate the changes. -->\n' +
    '\n' +
    '  - **Screenshots before code changes**\n' +
    '\n' +
    '  <!-- Add before screenshot or screen recording -->\n' +
    '\n' +
    '  - **Screenshots after code changes**\n' +
    '\n' +
    '  <!-- Add after screenshot or screen recording -->\n' +
    '\n' +
    '</details>\n' +
    '\n' +
    '# GenAI Usage Survey\n' +
    '\n' +
    '- **Was any AI Assistant used in the code creation?**\n' +
    '  - [ ] No (default)\n' +
    '  - [ ] Yes\n' +
    '\n' +
    '<details>\n' +
    '<summary>If Yes, click to provide more details</summary>\n' +
    '\n' +
    '- **Name of the tool:**\n' +
    '  - [ ] GitHub Copilot\n' +
    '  - [ ] Codeium\n' +
    '  - [ ] Other: ___________\n' +
    '\n' +
    '- **How helpful was the AI assistant?** (Scale 0-10, where 10 means very helpful and 0 means not helpful at all)\n' +
    '  - [ ] 0\n' +
    '  - [ ] 1\n' +
    '  - [ ] 2\n' +
    '  - [ ] 3\n' +
    '  - [ ] 4\n' +
    '  - [ ] 5\n' +
    '  - [ ] 6\n' +
    '  - [ ] 7\n' +
    '  - [ ] 8\n' +
    '  - [ ] 9\n' +
    '  - [ ] 10\n' +
    '\n' +
    '- **How much code in this PR was generated by AI tools?** (Scale 1-10, where 10 means all and 0 means none. Put a X within square brackets)\n' +
    '  - [ ] 0\n' +
    '  - [ ] 1\n' +
    '  - [ ] 2\n' +
    '  - [ ] 3\n' +
    '  - [ ] 4\n' +
    '  - [ ] 5\n' +
    '  - [ ] 6\n' +
    '  - [ ] 7\n' +
    '  - [ ] 8\n' +
    '  - [ ] 9\n' +
    '  - [ ] 10\n' +
    '\n' +
    '- **How much time was saved by using AI tools?** (Enter a number between 0 and 999)\n' +
    '  -  Hours: `hours`\n' +
    '\n' +
    '</details>',
  CI_JOB_TOKEN: '[MASKED]',
  FF_USE_DYNAMIC_TRACE_FORCE_SEND_INTERVAL: 'false',
  CI_NODE_TOTAL: '1',
  CI_PROJECT_NAMESPACE_ID: '1124',
  CI_MERGE_REQUEST_SOURCE_BRANCH_SHA: '',
  CI_PIPELINE_CREATED_AT: '2025-05-26T13:46:07Z',
  BASE_DIR: 'app',
  CI_JOB_NAME_SLUG: 'accessibility',
  RUNNER_TEMP_PROJECT_DIR: '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static.tmp',
  CI_CONCURRENT_PROJECT_ID: '0',
  CI_MERGE_REQUEST_IID: '35264',
  CI_PIPELINE_URL: 'https://gitlab.verizon.com/B6NV_MYVWEB/onevz-soe-digital-orders-static/-/pipelines/8526532',
  FF_KUBERNETES_HONOR_ENTRYPOINT: 'false',
  PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
  CI_RUNNER_DESCRIPTION: 'gitlab runner',
  CI_SERVER_VERSION_MINOR: '1',
  FF_EXPORT_HIGH_CARDINALITY_METRICS: 'false',
  CI_JOB_STARTED_AT: '2025-05-26T14:21:11Z',
  GITLAB_USER_EMAIL: 'balasubramaniyan.vengatachalam@one.verizon.com',
  FF_USE_NEW_BASH_EVAL_STRATEGY: 'false',
  FF_MASK_ALL_DEFAULT_TOKENS: 'true',
  FF_DISABLE_UMASK_FOR_KUBERNETES_EXECUTOR: 'false',
  CI_PROJECT_VISIBILITY: 'private',
  CI_COMMIT_TITLE: 'Digital ACT-150 ACT150-3452 story: UPS drop off - UI changes[ELT][SCA][TEST][A]',
  CI_PROJECT_TITLE: 'onevz-soe-digital-orders-static',
  CI_SERVER: 'yes',
  FF_USE_GIT_BUNDLE_URIS: 'true',
  FF_USE_NATIVE_STEPS: 'false',
  FF_USE_FLEETING_ACQUIRE_HEARTBEATS: 'false',
  CI_MERGE_REQUEST_EVENT_TYPE: 'detached',
  FF_TIMESTAMPS: 'false',
  CI_MERGE_REQUEST_ID: '53898234',
  CI_PAGES_URL: 'http://b6nv_myvweb.example.com/onevz-soe-digital-orders-static',
  CI_PROJECT_REPOSITORY_LANGUAGES: 'javascript,css,html,typescript,shell',
  VSAD_GROUP: 'B6NV',
  FF_SET_PERMISSIONS_BEFORE_CLEANUP: 'true',
  FF_PRINT_POD_EVENTS: 'false',
  CI_SERVER_FQDN: 'gitlab.verizon.com',
  CI_COMMIT_AUTHOR: 'srudsa <sanjjay.s@verizon.com>',
  CI_RUNNER_SHORT_TOKEN: 'Lr32vo-xP',
  CI_PAGES_DOMAIN: 'example.com',
  CI_JOB_IMAGE: 'hivv-docker-np.oneartifactoryci.verizon.com/vzw/hivv/node-build:20.13-alpine3.181',
  CI_PIPELINE_NAME: '',
  CI_JOB_TIMEOUT: '3600',
  CI_REPOSITORY_URL: 'https://gitlab-ci-token:[MASKED]@gitlab.verizon.com/B6NV_MYVWEB/onevz-soe-digital-orders-static.git',
  GITLAB_ENV: '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static.tmp/gitlab_runner_env',
  DO_NOT_STOP_WHEN_UTC_FAILS: 'true',
  CI_PROJECT_CLASSIFICATION_LABEL: '',
  FF_USE_POWERSHELL_PATH_RESOLVER: 'false',
  CI_API_GRAPHQL_URL: 'https://gitlab.verizon.com/api/graphql',
  FF_GIT_URLS_WITHOUT_TOKENS: 'false',
  CI_RUNNER_ID: '119888',
  CI_API_V4_URL: 'https://gitlab.verizon.com/api/v4',
  CI_MERGE_REQUEST_SOURCE_PROJECT_URL: 'https://gitlab.verizon.com/B6NV_MYVWEB/onevz-soe-digital-orders-static',
  CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX: 'gitlab.verizon.com:443/b6nv_myvweb/dependency_proxy/containers',
  CI_REGISTRY: 'gitlab.verizon.com:4567',
  GITLAB_USER_NAME: 'Vengatachalam, Balasubramaniyan',
  CI_MERGE_REQUEST_PROJECT_ID: '114954',
  CI_PIPELINE_IID: '2345',
  CI_RUNNER_EXECUTABLE_ARCH: 'linux/amd64',
  CI_MERGE_REQUEST_DESCRIPTION_IS_TRUNCATED: 'false',
  FF_USE_POD_ACTIVE_DEADLINE_SECONDS: 'true',
  FF_USE_ADVANCED_POD_SPEC_CONFIGURATION: 'false',
  CI_SERVER_SHELL_SSH_HOST: 'gitlab.verizon.com',
  CI_JOB_URL: 'https://gitlab.verizon.com/B6NV_MYVWEB/onevz-soe-digital-orders-static/-/jobs/41291341',
  FF_USE_INIT_WITH_DOCKER_EXECUTOR: 'false',
  FF_TEST_FEATURE: 'false',
  CI_MERGE_REQUEST_REF_PATH: 'refs/merge-requests/35264/head',
  CI_COMMIT_REF_SLUG: 'act150-3452-upsdroppoff',
  PWD: '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app',
  CI_DISPOSABLE_ENVIRONMENT: 'true',
  CI_RUNNER_TAGS: '["ec2-autoscaller", "ec2-gitlab-runner-unified"]',
  CI_MERGE_REQUEST_PROJECT_PATH: 'B6NV_MYVWEB/onevz-soe-digital-orders-static',
  FF_SECRET_RESOLVING_FAILS_IF_MISSING: 'true',
  CI_PIPELINE_ID: '8526532',
  CI_SERVER_TLS_CA_FILE: '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static.tmp/CI_SERVER_TLS_CA_FILE',
  CI_MERGE_REQUEST_TITLE: 'Digital ACT-150 ACT150-3452 story: UPS drop off - UI changes[ELT][SCA][TEST][A]',
  HTTP_PROXY: '',
  CI_PROJECT_PATH_SLUG: 'b6nv-myvweb-onevz-soe-digital-orders-static',
  CI_COMMIT_BEFORE_SHA: '0000000000000000000000000000000000000000',
  CI_CONFIG_PATH: '.gitlab-ci.yml',
  CI_PROJECT_URL: 'https://gitlab.verizon.com/B6NV_MYVWEB/onevz-soe-digital-orders-static',
  CI_COMMIT_MESSAGE: 'Digital ACT-150 ACT150-3452 story: UPS drop off - UI changes[ELT][SCA][TEST][A]\n',
  GITLAB_USER_ID: '7003',
  CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX: 'gitlab.verizon.com:443/b6nv_myvweb/dependency_proxy/containers',
  FF_ENABLE_BASH_EXIT_CODE_CHECK: 'false',
  CI_JOB_NAME: 'Accessibility',
  CI_OPEN_MERGE_REQUESTS: 'B6NV_MYVWEB/onevz-soe-digital-orders-static!35264',
  CI_JOB_STATUS: 'running',
  CI_MERGE_REQUEST_DIFF_BASE_SHA: 'a7a3ab5de789f83f79985ccd919b4d9b373f73b9',
  WORKERS: '',
  CI_SERVER_SHELL_SSH_PORT: '22',
  CI_MERGE_REQUEST_TARGET_BRANCH_NAME: 'main'
}
Database connected successfully
1: starting server using command "npm run all:start"
and when url "[ 'http://localhost:4001/#/' ]" is responding with HTTP status code 200
running tests using command "npx playwright test --config=./playwright/playwright.config.ts"
> simple@1.0.0 all:start
> npm-run-all --parallel start:*
> simple@1.0.0 start:orders
> webpack-dev-server --config=./webpack/dev.js --env project=orders  --port 4001 --open
> simple@1.0.0 start:curbside
> webpack-dev-server --config=./webpack/dev.js --env project=curbside  --port 4003 --open
> simple@1.0.0 start:scan
> webpack-dev-server --config=./webpack/dev.js --env project=scan  --port 4002 --open
> simple@1.0.0 start:nav
> webpack-dev-server --config=./webpack/dev.js --env project=nav  --port 4006 --open
> simple@1.0.0 start:raf
> webpack-dev-server --config=./webpack/dev.js --env project=raf  --port 4004 --open
> simple@1.0.0 start:fss
> webpack-dev-server --config=./webpack/dev.js --env project=fss  --port 4005 --open
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
(node:303) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
(node:283) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
(node:284) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
(node:303) [DEP_WEBPACK_MAIN_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: MainTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:303) [DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:303) [DEP_WEBPACK_MAIN_TEMPLATE_HASH_FOR_CHUNK] DeprecationWarning: MainTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
(node:283) [DEP_WEBPACK_MAIN_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: MainTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:283) [DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:283) [DEP_WEBPACK_MAIN_TEMPLATE_HASH_FOR_CHUNK] DeprecationWarning: MainTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
(node:280) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
(node:284) [DEP_WEBPACK_MAIN_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: MainTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:284) [DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:284) [DEP_WEBPACK_MAIN_TEMPLATE_HASH_FOR_CHUNK] DeprecationWarning: MainTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
(node:282) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
(node:280) [DEP_WEBPACK_MAIN_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: MainTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:280) [DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:280) [DEP_WEBPACK_MAIN_TEMPLATE_HASH_FOR_CHUNK] DeprecationWarning: MainTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4005/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.5:4005/
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<i> [webpack-dev-server] Project is running at:
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<i> [webpack-dev-server] Loopback: http://localhost:4006/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.5:4006/
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<i> [webpack-dev-server] Content not from webpack is served from '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/build/fss' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<i> [webpack-dev-server] Content not from webpack is served from '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/build/nav' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4004/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.5:4004/
(node:282) [DEP_WEBPACK_MAIN_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: MainTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:282) [DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:282) [DEP_WEBPACK_MAIN_TEMPLATE_HASH_FOR_CHUNK] DeprecationWarning: MainTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)
<i> [webpack-dev-server] Content not from webpack is served from '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/build/raf' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
(node:281) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4001/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.5:4001/
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<i> [webpack-dev-server] Content not from webpack is served from '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/build/orders' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4002/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.5:4002/
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<i> [webpack-dev-server] Content not from webpack is served from '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/build/scan' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
(node:281) [DEP_WEBPACK_MAIN_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: MainTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:281) [DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST] DeprecationWarning: ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)
(node:281) [DEP_WEBPACK_MAIN_TEMPLATE_HASH_FOR_CHUNK] DeprecationWarning: MainTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4003/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.5:4003/
<i> [webpack-dev-server] Content not from webpack is served from '/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/build/curbside' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<s> [webpack.Progress] 10% building import loader ./node_modules/babel-loader/lib/index.js
<s> [webpack.Progress] 10% building import loader ./node_modules/babel-loader/lib/index.js
<s> [webpack.Progress] 10% building import loader ./node_modules/babel-loader/lib/index.js
<s> [webpack.Progress] 10% building import loader ./node_modules/babel-loader/lib/index.js
<s> [webpack.Progress] 10% building import loader ./node_modules/babel-loader/lib/index.js
<s> [webpack.Progress] 10% building 0/3 entries 14/15 dependencies 0/14 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/babel-loader/lib/index.js
<s> [webpack.Progress] 10% building 0/3 entries 15/27 dependencies 2/14 modules
<s> [webpack.Progress] 10% building 0/3 entries 14/15 dependencies 0/14 modules
<s> [webpack.Progress] 10% building 0/3 entries 15/27 dependencies 2/14 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 10% building 0/3 entries 15/18 dependencies 0/14 modules
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
<s> [webpack.Progress] 10% building 0/3 entries 15/18 dependencies 0/14 modules
Browserslist: browsers data (caniuse-lite) is 7 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
<s> [webpack.Progress] 10% building 0/3 entries 31/42 dependencies 11/21 modules
<s> [webpack.Progress] 10% building 0/3 entries 33/43 dependencies 15/22 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/mini-css-extract-plugin/dist/loader.js
<s> [webpack.Progress] 10% building 0/3 entries 33/43 dependencies 16/22 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/css-loader/dist/cjs.js
<s> [webpack.Progress] 10% building import loader ./node_modules/mini-css-extract-plugin/dist/loader.js
<s> [webpack.Progress] 10% building 0/3 entries 33/43 dependencies 16/22 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/mini-css-extract-plugin/dist/loader.js
<s> [webpack.Progress] 10% building import loader ./node_modules/css-loader/dist/cjs.js
<s> [webpack.Progress] 10% building import loader ./node_modules/css-loader/dist/cjs.js
<s> [webpack.Progress] 10% building 0/3 entries 31/42 dependencies 11/21 modules
<s> [webpack.Progress] 10% building 0/3 entries 33/43 dependencies 16/22 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/mini-css-extract-plugin/dist/loader.js
<s> [webpack.Progress] 10% building import loader ./node_modules/css-loader/dist/cjs.js
<s> [webpack.Progress] 10% building import loader ./node_modules/mini-css-extract-plugin/dist/loader.js
<s> [webpack.Progress] 10% building 0/3 entries 37/65 dependencies 15/25 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/css-loader/dist/cjs.js
(node:284) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader
<s> [webpack.Progress] 10% building 0/3 entries 37/63 dependencies 16/25 modules
(node:280) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader
<s> [webpack.Progress] 10% building 0/3 entries 36/69 dependencies 16/24 modules
(node:303) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader
<s> [webpack.Progress] 10% building 0/3 entries 36/69 dependencies 16/24 modules
<s> [webpack.Progress] 10% building import loader ./node_modules/mini-css-extract-plugin/dist/loader.js
(node:283) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader
<s> [webpack.Progress] 10% building import loader ./node_modules/css-loader/dist/cjs.js
<s> [webpack.Progress] 28% building 1/3 entries 65/88 dependencies 20/45 modules
<s> [webpack.Progress] 10% building 0/3 entries 37/68 dependencies 16/25 modules
(node:282) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader
<s> [webpack.Progress] 28% building 1/3 entries 79/144 dependencies 20/55 modules
<s> [webpack.Progress] 10% building 0/3 entries 37/68 dependencies 16/25 modules
(node:281) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader
<s> [webpack.Progress] 28% building 1/3 entries 89/161 dependencies 20/60 modules
<s> [webpack.Progress] 28% building 1/3 entries 83/111 dependencies 20/58 modules
<s> [webpack.Progress] 28% building 1/3 entries 84/165 dependencies 20/58 modules
<s> [webpack.Progress] 40% building 2/3 entries 96/175 dependencies 27/64 modules
<s> [webpack.Progress] 38% building 2/3 entries 79/155 dependencies 26/55 modules
<s> [webpack.Progress] 28% building 1/3 entries 75/93 dependencies 20/52 modules
<s> [webpack.Progress] 37% building 2/3 entries 92/187 dependencies 26/62 modules
<s> [webpack.Progress] 33% building 2/3 entries 87/200 dependencies 27/60 modules
(node:303) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
(node:303) [DEP_WEBPACK_MODULE_ID] DeprecationWarning: Module.id: Use new ChunkGraph API
(node:283) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
(node:283) [DEP_WEBPACK_MODULE_ID] DeprecationWarning: Module.id: Use new ChunkGraph API
<s> [webpack.Progress] 34% building 2/3 entries 85/192 dependencies 26/58 modules
<s> [webpack.Progress] 35% building 2/3 entries 103/222 dependencies 27/73 modules
(node:284) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
(node:284) [DEP_WEBPACK_MODULE_ID] DeprecationWarning: Module.id: Use new ChunkGraph API
(node:282) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
(node:282) [DEP_WEBPACK_MODULE_ID] DeprecationWarning: Module.id: Use new ChunkGraph API
(node:281) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
(node:281) [DEP_WEBPACK_MODULE_ID] DeprecationWarning: Module.id: Use new ChunkGraph API
<s> [webpack.Progress] 42% building 2/3 entries 300/514 dependencies 31/156 modules
<s> [webpack.Progress] 32% building 2/3 entries 232/564 dependencies 29/126 modules
<s> [webpack.Progress] 39% building 2/3 entries 300/563 dependencies 28/169 modules
<s> [webpack.Progress] 46% building 2/3 entries 199/300 dependencies 27/134 modules
(node:280) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
(node:280) [DEP_WEBPACK_MODULE_ID] DeprecationWarning: Module.id: Use new ChunkGraph API
<s> [webpack.Progress] 36% building 2/3 entries 300/630 dependencies 29/164 modules
<s> [webpack.Progress] 38% building 2/3 entries 300/570 dependencies 30/163 modules
<s> [webpack.Progress] 46% building 2/3 entries 857/900 dependencies 110/272 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 46% building 2/3 entries 894/1000 dependencies 131/284 modules
<s> [webpack.Progress] 46% building 2/3 entries 945/1100 dependencies 156/284 modules
<s> [webpack.Progress] 46% building 2/3 entries 943/1000 dependencies 152/289 modules
<s> [webpack.Progress] 46% building 2/3 entries 575/700 dependencies 40/247 modules
<s> [webpack.Progress] 46% building 2/3 entries 987/1100 dependencies 141/290 modules
<s> [webpack.Progress] 46% building 2/3 entries 1299/1400 dependencies 266/408 modules
<s> [webpack.Progress] 46% building 2/3 entries 1200/1290 dependencies 246/363 modules
<s> [webpack.Progress] 46% building 2/3 entries 1099/1200 dependencies 204/329 modules
<s> [webpack.Progress] 46% building 2/3 entries 1200/1260 dependencies 253/364 modules
<s> [webpack.Progress] 46% building 2/3 entries 994/1100 dependencies 85/324 modules
<s> [webpack.Progress] 46% building 2/3 entries 1400/1418 dependencies 263/460 modules
<s> [webpack.Progress] 46% building 2/3 entries 1500/1547 dependencies 310/503 modules
<s> [webpack.Progress] 46% building 2/3 entries 1591/1703 dependencies 319/500 modules
<s> [webpack.Progress] 46% building 2/3 entries 1483/1583 dependencies 300/479 modules
<s> [webpack.Progress] 46% building 2/3 entries 1426/1492 dependencies 300/457 modules
<s> [webpack.Progress] 46% building 2/3 entries 1700/1765 dependencies 328/541 modules
<s> [webpack.Progress] 46% building 2/3 entries 1990/2100 dependencies 375/687 modules
<s> [webpack.Progress] 46% building 2/3 entries 1700/1792 dependencies 352/532 modules
<s> [webpack.Progress] 46% building 2/3 entries 1666/1800 dependencies 342/519 modules
<s> [webpack.Progress] 46% building 2/3 entries 1754/1800 dependencies 365/558 modules
<s> [webpack.Progress] 46% building 2/3 entries 2900/2971 dependencies 524/847 modules
<s> [webpack.Progress] 46% building 2/3 entries 1975/2000 dependencies 381/636 modules
<s> [webpack.Progress] 46% building 2/3 entries 2115/2200 dependencies 423/697 modules
<s> [webpack.Progress] 46% building 2/3 entries 2200/2269 dependencies 422/690 modules
<s> [webpack.Progress] 46% building 2/3 entries 2096/2182 dependencies 437/700 modules
<s> [webpack.Progress] 46% building 2/3 entries 3482/3600 dependencies 757/1026 modules
<s> [webpack.Progress] 46% building 2/3 entries 2520/2700 dependencies 504/804 modules
<s> [webpack.Progress] 46% building 2/3 entries 2900/2978 dependencies 602/809 modules
<s> [webpack.Progress] 46% building 2/3 entries 1187/1400 dependencies 126/353 modules
<s> [webpack.Progress] 46% building 2/3 entries 2804/2900 dependencies 577/812 modules
<s> [webpack.Progress] 46% building 2/3 entries 2978/3100 dependencies 575/858 modules
<s> [webpack.Progress] 46% building 2/3 entries 4181/4267 dependencies 1042/1300 modules
<s> [webpack.Progress] 46% building 2/3 entries 3400/3454 dependencies 764/998 modules
<s> [webpack.Progress] 46% building 2/3 entries 3695/3800 dependencies 864/1089 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 46% building 2/3 entries 3700/3779 dependencies 830/1076 modules
<s> [webpack.Progress] 46% building 2/3 entries 1400/1613 dependencies 142/396 modules
<s> [webpack.Progress] 46% building 2/3 entries 3755/3800 dependencies 886/1125 modules
<s> [webpack.Progress] 46% building 2/3 entries 4900/4964 dependencies 1297/1489 modules
<s> [webpack.Progress] 46% building 2/3 entries 4300/4463 dependencies 1039/1352 modules
<s> [webpack.Progress] 46% building 2/3 entries 3952/4000 dependencies 930/1194 modules
<s> [webpack.Progress] 46% building 2/3 entries 4500/4594 dependencies 994/1402 modules
<s> [webpack.Progress] 46% building 2/3 entries 4600/4675 dependencies 1222/1406 modules
<s> [webpack.Progress] 46% building 2/3 entries 1587/1700 dependencies 143/428 modules
<s> [webpack.Progress] 64% building 3/3 entries 5192/5192 dependencies 1561/1561 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 46% building 2/3 entries 5700/5774 dependencies 1622/1681 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 46% building 2/3 entries 5092/5094 dependencies 1400/1523 modules
<s> [webpack.Progress] 46% building 2/3 entries 4700/4733 dependencies 1251/1391 modules
<s> [webpack.Progress] 65% building 3/3 entries 5143/5143 dependencies 1536/1536 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 46% building 2/3 entries 5352/5400 dependencies 1392/1598 modules
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 65% building 3/3 entries 5944/5944 dependencies 1711/1711 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 46% building 2/3 entries 1920/2000 dependencies 241/546 modules
<s> [webpack.Progress] 65% building 3/3 entries 5683/5683 dependencies 1674/1674 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 65% building 3/3 entries 5184/5184 dependencies 1524/1524 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
(node:281) [DEP_WEBPACK_MODULE_UPDATE_HASH] DeprecationWarning: Module.updateHash: Use new ChunkGraph API
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
(node:283) [DEP_WEBPACK_MODULE_UPDATE_HASH] DeprecationWarning: Module.updateHash: Use new ChunkGraph API
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
(node:284) [DEP_WEBPACK_MODULE_UPDATE_HASH] DeprecationWarning: Module.updateHash: Use new ChunkGraph API
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
(node:281) [DEP_WEBPACK_CHUNK_MODULES_ITERABLE] DeprecationWarning: Chunk.modulesIterable: Use new ChunkGraph API
(node:281) [DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2] DeprecationWarning: ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/curbside.css generate SourceMap
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/curbside.css generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js generate SourceMap
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
(node:282) [DEP_WEBPACK_MODULE_UPDATE_HASH] DeprecationWarning: Module.updateHash: Use new ChunkGraph API
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
(node:303) [DEP_WEBPACK_MODULE_UPDATE_HASH] DeprecationWarning: Module.updateHash: Use new ChunkGraph API
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
(node:283) [DEP_WEBPACK_CHUNK_MODULES_ITERABLE] DeprecationWarning: Chunk.modulesIterable: Use new ChunkGraph API
(node:283) [DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2] DeprecationWarning: ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/nav.css generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/nav.css generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js generate SourceMap
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
(node:284) [DEP_WEBPACK_CHUNK_MODULES_ITERABLE] DeprecationWarning: Chunk.modulesIterable: Use new ChunkGraph API
(node:284) [DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2] DeprecationWarning: ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/raf.css generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/raf.css generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js generate SourceMap
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 46% building 2/3 entries 2343/2500 dependencies 291/667 modules
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
(node:282) [DEP_WEBPACK_CHUNK_MODULES_ITERABLE] DeprecationWarning: Chunk.modulesIterable: Use new ChunkGraph API
(node:282) [DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2] DeprecationWarning: ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/scan.css generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/scan.css generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js generate SourceMap
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
(node:303) [DEP_WEBPACK_CHUNK_MODULES_ITERABLE] DeprecationWarning: Chunk.modulesIterable: Use new ChunkGraph API
(node:303) [DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2] DeprecationWarning: ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/fss.css generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/fss.css generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/curbside.css attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/curbside.css attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/nav.css attach SourceMap
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/raf.css attach SourceMap
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/raf.css attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js attach SourceMap
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/nav.css attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js attach SourceMap
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/scan.css attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/scan.css attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
assets by path curbside/assets/ 496 KiB
  assets by path curbside/assets/gnav/ 478 KiB
    assets by path curbside/assets/gnav/*.json 57.9 KiB 4 assets
    assets by path curbside/assets/gnav/*.js 267 KiB 2 assets
    assets by path curbside/assets/gnav/*.css 152 KiB 2 assets
  assets by path curbside/assets/pi/*.js 15.4 KiB
    asset curbside/assets/pi/encryption.js 14.6 KiB [emitted]
    asset curbside/assets/pi/getkey.js 853 bytes [emitted]
  asset curbside/assets/pdf_action_button.png 2.95 KiB [emitted]
  asset curbside/assets/images/favicon.png 287 bytes [emitted]
assets by chunk 8.53 MiB (name: main)
  asset curbside/js/curbside.js 8.52 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset css/curbside.css 6.9 KiB [emitted] (name: main) (id hint: vendors) 1 related asset
asset index.html 1.68 KiB [emitted]
Entrypoint main 8.53 MiB (7.77 MiB) = css/curbside.css 6.9 KiB curbside/js/curbside.js 8.52 MiB 2 auxiliary assets
orphan modules 205 KiB [orphan] 188 modules
runtime modules 28.2 KiB 19 modules
modules by path ./node_modules/ 6.47 MiB (javascript) 6.86 KiB (unknown)
  javascript modules 6.03 MiB 1299 modules
  json modules 452 KiB
    ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built] [code generated]
    + 2 modules
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built] [code generated]
modules by path ./src/ 275 KiB (javascript) 0 bytes (unknown)
  modules by path ./src/lib/ 240 KiB 61 modules
  modules by path ./src/app/ 35.1 KiB (javascript) 0 bytes (unknown)
    modules by path ./src/app/curbside/ 24.5 KiB (javascript) 0 bytes (unknown) 6 modules
    modules by path ./src/app/orders/pages/common/*.js 10.6 KiB 2 modules
./mock/curbside/get/landing.json 688 bytes [built] [code generated]
WARNING in DefinePlugin
Conflicting values for 'process.env'
3 WARNINGS in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 4 warnings in 8223 ms
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/fss.css attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/fss.css attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js attach SourceMap
<s> [webpack.Progress] 46% building 2/3 entries 2607/2700 dependencies 329/716 modules
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 0% 
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 10% building 1/3 entries 6/20 dependencies 18/6 modules
<s> [webpack.Progress] 10% building 2/3 entries 20/20 dependencies 28/17 modules
(node:281) [DEP_WEBPACK_MODULE_NEED_REBUILD] DeprecationWarning: Module.needRebuild is deprecated in favor of Module.needBuild
assets by path raf/assets/ 496 KiB
  assets by path raf/assets/gnav/ 478 KiB
    assets by path raf/assets/gnav/*.json 57.9 KiB 4 assets
    assets by path raf/assets/gnav/*.js 267 KiB 2 assets
    assets by path raf/assets/gnav/*.css 152 KiB 2 assets
  assets by path raf/assets/pi/*.js 15.4 KiB
    asset raf/assets/pi/encryption.js 14.6 KiB [emitted]
    asset raf/assets/pi/getkey.js 853 bytes [emitted]
  asset raf/assets/pdf_action_button.png 2.95 KiB [emitted]
  asset raf/assets/images/favicon.png 287 bytes [emitted]
assets by chunk 9.51 MiB (name: main)
  asset raf/js/raf.js 9.5 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset css/raf.css 7.14 KiB [emitted] (name: main) (id hint: vendors) 1 related asset
asset index.html 2.16 KiB [emitted]
Entrypoint main 9.51 MiB (8.77 MiB) = css/raf.css 7.14 KiB raf/js/raf.js 9.5 MiB 2 auxiliary assets
orphan modules 105 KiB [orphan] 149 modules
runtime modules 28.2 KiB 19 modules
modules by path ./node_modules/ 6.94 MiB (javascript) 6.86 KiB (unknown)
  cacheable modules 6.94 MiB 1495 modules
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built] [code generated]
  ./node_modules/ionicons/dist/esm-es5/ lazy ^\.\/.*\.entry\.js$ namespace object 160 bytes [built] [code generated]
  ./node_modules/@ionic/core/dist/esm-es5/ lazy ^\.\/.*\.entry\.js$ na...(truncated) 160 bytes [built] [code generated]
modules by path ./src/ 266 KiB (javascript) 249 bytes (unknown)
  modules by path ./src/lib/ 238 KiB
    javascript modules 233 KiB 52 modules
    json modules 4.85 KiB 3 modules
  modules by path ./src/app/ 28.1 KiB (javascript) 249 bytes (unknown)
    modules by path ./src/app/raf/ 17.5 KiB (javascript) 249 bytes (unknown) 7 modules
    modules by path ./src/app/orders/pages/common/*.js 10.6 KiB 2 modules
WARNING in DefinePlugin
Conflicting values for 'process.env'
3 WARNINGS in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 4 warnings in 8551 ms
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
assets by path scan/assets/ 496 KiB
  assets by path scan/assets/gnav/ 478 KiB
    assets by path scan/assets/gnav/*.json 57.9 KiB 4 assets
    assets by path scan/assets/gnav/*.js 267 KiB 2 assets
    assets by path scan/assets/gnav/*.css 152 KiB 2 assets
  assets by path scan/assets/pi/*.js 15.4 KiB
    asset scan/assets/pi/encryption.js 14.6 KiB [emitted]
    asset scan/assets/pi/getkey.js 853 bytes [emitted]
  asset scan/assets/pdf_action_button.png 2.95 KiB [emitted]
  asset scan/assets/images/favicon.png 287 bytes [emitted]
assets by chunk 8.5 MiB (name: main)
  asset scan/js/scan.js 8.49 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset css/scan.css 8.54 KiB [emitted] (name: main) (id hint: vendors) 1 related asset
asset index.html 1.67 KiB [emitted]
Entrypoint main 8.5 MiB (7.76 MiB) = css/scan.css 8.54 KiB scan/js/scan.js 8.49 MiB 2 auxiliary assets
orphan modules 205 KiB [orphan] 188 modules
runtime modules 28.2 KiB 19 modules
modules by path ./node_modules/ 6.44 MiB (javascript) 6.86 KiB (unknown)
  javascript modules 6 MiB 1253 modules
  json modules 452 KiB
    ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built] [code generated]
    + 2 modules
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built] [code generated]
modules by path ./src/ 310 KiB (javascript) 1.64 KiB (unknown)
  modules by path ./src/lib/ 240 KiB 61 modules
  modules by path ./src/app/ 69.7 KiB (javascript) 1.64 KiB (unknown)
    cacheable modules 69.7 KiB 15 modules
    css modules 1.64 KiB 2 modules
./mock/scan/get/landing.json 944 bytes [built] [code generated]
WARNING in ./src/app/scan/httpClient.js 22:20-40
Should not import the named export 'xAPIKey' (imported as 'configvalues') from default-exporting module (only default export is available soon)
 @ ./src/app/scan/pages/Submission.jsx 24:0-54 46:12-33
 @ ./src/app/scan/router.jsx 27:9-41
 @ ./src/app/scan/App.jsx 24:0-33 143:60-66
 @ ./src/app/scan/index.jsx 9:0-27 13:88-91
WARNING in ./src/app/scan/pages/Submission.jsx 45:22-42
Should not import the named export 'baseUrl' (imported as 'configvalues') from default-exporting module (only default export is available soon)
 @ ./src/app/scan/router.jsx 27:9-41
 @ ./src/app/scan/App.jsx 24:0-33 143:60-66
 @ ./src/app/scan/index.jsx 9:0-27 13:88-91
WARNING in ./src/app/scan/pages/Submission.jsx 45:45-82
Should not import the named export 'gatewayUrls'.'submitIdScan' (imported as 'configvalues') from default-exporting module (only default export is available soon)
 @ ./src/app/scan/router.jsx 27:9-41
 @ ./src/app/scan/App.jsx 24:0-33 143:60-66
 @ ./src/app/scan/index.jsx 9:0-27 13:88-91
WARNING in DefinePlugin
Conflicting values for 'process.env'
4 WARNINGS in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 8 warnings in 8640 ms
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 64% building 3/3 entries 181/181 dependencies 1561/75 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
assets by path nav/assets/ 496 KiB
  assets by path nav/assets/gnav/ 478 KiB
    assets by path nav/assets/gnav/*.json 57.9 KiB 4 assets
    assets by path nav/assets/gnav/*.js 267 KiB 2 assets
    assets by path nav/assets/gnav/*.css 152 KiB 2 assets
  assets by path nav/assets/pi/*.js 15.4 KiB
    asset nav/assets/pi/encryption.js 14.6 KiB [emitted]
    asset nav/assets/pi/getkey.js 853 bytes [emitted]
  asset nav/assets/pdf_action_button.png 2.95 KiB [emitted]
  asset nav/assets/images/favicon.png 287 bytes [emitted]
assets by chunk 8.47 MiB (name: main)
  asset nav/js/nav.js 8.46 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset css/nav.css 7.14 KiB [emitted] (name: main) (id hint: vendors) 1 related asset
asset index.html 2.16 KiB [emitted]
Entrypoint main 8.47 MiB (7.72 MiB) = css/nav.css 7.14 KiB nav/js/nav.js 8.46 MiB 2 auxiliary assets
orphan modules 197 KiB [orphan] 186 modules
runtime modules 28.2 KiB 19 modules
modules by path ./node_modules/ 6.44 MiB (javascript) 6.86 KiB (unknown)
  javascript modules 6 MiB 1274 modules
  json modules 452 KiB
    ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built] [code generated]
    + 2 modules
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built] [code generated]
modules by path ./src/ 267 KiB (javascript) 249 bytes (unknown)
  modules by path ./src/lib/ 241 KiB
    javascript modules 236 KiB 60 modules
    json modules 4.85 KiB 3 modules
  modules by path ./src/app/ 25.9 KiB (javascript) 249 bytes (unknown)
    modules by path ./src/app/nav/ 15.3 KiB (javascript) 249 bytes (unknown) 7 modules
    modules by path ./src/app/orders/pages/common/*.js 10.6 KiB 2 modules
WARNING in DefinePlugin
Conflicting values for 'process.env'
3 WARNINGS in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 4 warnings in 8639 ms
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 0% 
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 10% building 1/3 entries 6/18 dependencies 18/6 modules
<s> [webpack.Progress] 10% building 2/3 entries 18/18 dependencies 28/15 modules
(node:284) [DEP_WEBPACK_MODULE_NEED_REBUILD] DeprecationWarning: Module.needRebuild is deprecated in favor of Module.needBuild
<s> [webpack.Progress] 46% building 2/3 entries 3246/3400 dependencies 413/853 modules
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 0% 
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 10% building 1/3 entries 6/20 dependencies 18/6 modules
<s> [webpack.Progress] 11% building 2/3 entries 20/20 dependencies 28/17 modules
<s> [webpack.Progress] 65% building 3/3 entries 169/169 dependencies 1711/69 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
(node:282) [DEP_WEBPACK_MODULE_NEED_REBUILD] DeprecationWarning: Module.needRebuild is deprecated in favor of Module.needBuild
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 65% building 3/3 entries 212/212 dependencies 1524/84 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/curbside.css restored cached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js generate SourceMap
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 0% 
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 10% building 1/3 entries 6/21 dependencies 18/6 modules
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 11% building 2/3 entries 21/21 dependencies 28/18 modules
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
assets by path fss/assets/ 496 KiB
  assets by path fss/assets/gnav/ 478 KiB
    assets by path fss/assets/gnav/*.json 57.9 KiB 4 assets
    assets by path fss/assets/gnav/*.js 267 KiB 2 assets
    assets by path fss/assets/gnav/*.css 152 KiB 2 assets
  assets by path fss/assets/pi/*.js 15.4 KiB
    asset fss/assets/pi/encryption.js 14.6 KiB [emitted]
    asset fss/assets/pi/getkey.js 853 bytes [emitted]
  asset fss/assets/pdf_action_button.png 2.95 KiB [emitted]
  asset fss/assets/images/favicon.png 287 bytes [emitted]
assets by chunk 9.12 MiB (name: main)
  asset fss/js/fss.js 9.11 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset css/fss.css 7.14 KiB [emitted] (name: main) (id hint: vendors) 1 related asset
asset index.html 2.16 KiB [emitted]
Entrypoint main 9.12 MiB (8.17 MiB) = css/fss.css 7.14 KiB fss/js/fss.js 9.11 MiB 2 auxiliary assets
orphan modules 205 KiB [orphan] 188 modules
runtime modules 28.2 KiB 19 modules
modules by path ./node_modules/ 6.73 MiB (javascript) 6.86 KiB (unknown)
  javascript modules 6.29 MiB 1406 modules
  json modules 452 KiB
    ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built] [code generated]
    + 2 modules
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built] [code generated]
modules by path ./src/ 310 KiB (javascript) 249 bytes (unknown)
  modules by path ./src/lib/ 240 KiB
    javascript modules 235 KiB 58 modules
    json modules 4.85 KiB 3 modules
  modules by path ./src/app/ 70.4 KiB (javascript) 249 bytes (unknown)
    modules by path ./src/app/fss/ 59.8 KiB (javascript) 249 bytes (unknown) 13 modules
    modules by path ./src/app/orders/pages/common/*.js 10.6 KiB 2 modules
WARNING in DefinePlugin
Conflicting values for 'process.env'
3 WARNINGS in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 4 warnings in 8923 ms
(node:283) [DEP_WEBPACK_MODULE_NEED_REBUILD] DeprecationWarning: Module.needRebuild is deprecated in favor of Module.needBuild
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 64% building 3/3 entries 187/187 dependencies 1536/77 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/raf.css restored cached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js generate SourceMap
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/scan.css restored cached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js generate SourceMap
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 0% 
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.0966ccd5be2452ca33a9.hot-update.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.0966ccd5be2452ca33a9.hot-update.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js attach SourceMap
<s> [webpack.Progress] 10% building 1/3 entries 6/21 dependencies 18/6 modules
<s> [webpack.Progress] 10% building 2/3 entries 21/21 dependencies 28/18 modules
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
(node:303) [DEP_WEBPACK_MODULE_NEED_REBUILD] DeprecationWarning: Module.needRebuild is deprecated in favor of Module.needBuild
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1906c56ac10604e59360.hot-update.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1906c56ac10604e59360.hot-update.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js attach SourceMap
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/nav.css restored cached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin curbside/js/curbside.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.0966ccd5be2452ca33a9.hot-update.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.0966ccd5be2452ca33a9.hot-update.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin raf/js/raf.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1906c56ac10604e59360.hot-update.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1906c56ac10604e59360.hot-update.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1c861a110252f0cef986.hot-update.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1c861a110252f0cef986.hot-update.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js attach SourceMap
<s> [webpack.Progress] 64% building 3/3 entries 214/214 dependencies 1674/81 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin scan/js/scan.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1c861a110252f0cef986.hot-update.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.1c861a110252f0cef986.hot-update.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
assets by status 9.3 KiB [cached] 2 assets
assets by status 9.5 MiB [emitted]
  asset raf/js/raf.js 9.5 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset main.1906c56ac10604e59360.hot-update.js 351 bytes [emitted] [immutable] [hmr] (name: main) (id hint: vendors) 1 related asset
  asset main.1906c56ac10604e59360.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 9.51 MiB (8.76 MiB) = css/raf.css 7.14 KiB raf/js/raf.js 9.5 MiB main.1906c56ac10604e59360.hot-update.js 351 bytes 3 auxiliary assets
cached modules 7.29 MiB [cached] 1708 modules
runtime modules 28.2 KiB 19 modules
modules by layer 7.1 KiB (unknown) 6.46 KiB (javascript)
  css ./node_modules/css-loader/dist/cjs.js!./src/app/raf/App.css 249 bytes [built]
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built]
  ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built]
WARNING in DefinePlugin
Conflicting values for 'process.env'
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 1 warning in 714 ms
assets by status 8.58 KiB [cached] 2 assets
assets by status 8.52 MiB [emitted]
  asset curbside/js/curbside.js 8.52 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset main.0966ccd5be2452ca33a9.hot-update.js 351 bytes [emitted] [immutable] [hmr] (name: main) (id hint: vendors) 1 related asset
  asset main.0966ccd5be2452ca33a9.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 8.53 MiB (7.77 MiB) = css/curbside.css 6.9 KiB curbside/js/curbside.js 8.52 MiB main.0966ccd5be2452ca33a9.hot-update.js 351 bytes 3 auxiliary assets
cached modules 6.93 MiB [cached] 1558 modules
runtime modules 28.2 KiB 19 modules
modules by layer 6.86 KiB (unknown) 6.46 KiB (javascript)
  css ./node_modules/css-loader/dist/cjs.js!./src/app/curbside/App.css 0 bytes [built]
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built]
  ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built]
WARNING in DefinePlugin
Conflicting values for 'process.env'
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 1 warning in 1001 ms
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 46% building 2/3 entries 3550/3700 dependencies 457/985 modules
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.367e3cf6098815e91c84.hot-update.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.367e3cf6098815e91c84.hot-update.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js attach SourceMap
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
assets by status 10.2 KiB [cached] 2 assets
assets by status 8.49 MiB [emitted]
  asset scan/js/scan.js 8.49 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset main.1c861a110252f0cef986.hot-update.js 351 bytes [emitted] [immutable] [hmr] (name: main) (id hint: vendors) 1 related asset
  asset main.1c861a110252f0cef986.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 8.5 MiB (7.76 MiB) = css/scan.css 8.54 KiB scan/js/scan.js 8.49 MiB main.1c861a110252f0cef986.hot-update.js 351 bytes 3 auxiliary assets
cached modules 6.93 MiB [cached] 1520 modules
runtime modules 28.2 KiB 19 modules
modules by layer 8.5 KiB (unknown) 6.46 KiB (javascript)
  modules by path ./src/app/scan/ 1.64 KiB
    css ./node_modules/css-loader/dist/cjs.js!./src/app/scan/App.css 242 bytes [built]
    css ./node_modules/css-loader/dist/cjs.js!./src/app/scan/Style/Camera.css 1.4 KiB [built]
  modules by path ./node_modules/ 6.86 KiB (unknown) 6.46 KiB (javascript)
    css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built]
    ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built]
WARNING in ./src/app/scan/httpClient.js 22:20-40
Should not import the named export 'xAPIKey' (imported as 'configvalues') from default-exporting module (only default export is available soon)
 @ ./src/app/scan/pages/Submission.jsx 24:0-54 46:12-33
 @ ./src/app/scan/router.jsx 27:9-41
 @ ./src/app/scan/App.jsx 24:0-33 143:60-66
 @ ./src/app/scan/index.jsx 9:0-27 13:88-91
WARNING in ./src/app/scan/pages/Submission.jsx 45:22-42
Should not import the named export 'baseUrl' (imported as 'configvalues') from default-exporting module (only default export is available soon)
 @ ./src/app/scan/router.jsx 27:9-41
 @ ./src/app/scan/App.jsx 24:0-33 143:60-66
 @ ./src/app/scan/index.jsx 9:0-27 13:88-91
WARNING in ./src/app/scan/pages/Submission.jsx 45:45-82
Should not import the named export 'gatewayUrls'.'submitIdScan' (imported as 'configvalues') from default-exporting module (only default export is available soon)
 @ ./src/app/scan/router.jsx 27:9-41
 @ ./src/app/scan/App.jsx 24:0-33 143:60-66
 @ ./src/app/scan/index.jsx 9:0-27 13:88-91
WARNING in DefinePlugin
Conflicting values for 'process.env'
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 4 warnings in 712 ms
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin nav/js/nav.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.367e3cf6098815e91c84.hot-update.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.367e3cf6098815e91c84.hot-update.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
assets by status 9.3 KiB [cached] 2 assets
assets by status 8.46 MiB [emitted]
  asset nav/js/nav.js 8.46 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset main.367e3cf6098815e91c84.hot-update.js 351 bytes [emitted] [immutable] [hmr] (name: main) (id hint: vendors) 1 related asset
  asset main.367e3cf6098815e91c84.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 8.47 MiB (7.72 MiB) = css/nav.css 7.14 KiB nav/js/nav.js 8.46 MiB main.367e3cf6098815e91c84.hot-update.js 351 bytes 3 auxiliary assets
cached modules 6.89 MiB [cached] 1533 modules
runtime modules 28.2 KiB 19 modules
modules by layer 7.1 KiB (unknown) 6.46 KiB (javascript)
  css ./node_modules/css-loader/dist/cjs.js!./src/app/nav/App.css 249 bytes [built]
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built]
  ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built]
WARNING in DefinePlugin
Conflicting values for 'process.env'
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 1 warning in 655 ms
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/fss.css restored cached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.ce7c5a7e81f9a1c4e9a6.hot-update.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.ce7c5a7e81f9a1c4e9a6.hot-update.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin fss/js/fss.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.ce7c5a7e81f9a1c4e9a6.hot-update.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.ce7c5a7e81f9a1c4e9a6.hot-update.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
assets by status 9.3 KiB [cached] 2 assets
assets by status 9.11 MiB [emitted]
  asset fss/js/fss.js 9.11 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset main.ce7c5a7e81f9a1c4e9a6.hot-update.js 351 bytes [emitted] [immutable] [hmr] (name: main) (id hint: vendors) 1 related asset
  asset main.ce7c5a7e81f9a1c4e9a6.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 9.12 MiB (8.16 MiB) = css/fss.css 7.14 KiB fss/js/fss.js 9.11 MiB main.ce7c5a7e81f9a1c4e9a6.hot-update.js 351 bytes 3 auxiliary assets
cached modules 7.23 MiB [cached] 1671 modules
runtime modules 28.2 KiB 19 modules
modules by layer 7.1 KiB (unknown) 6.46 KiB (javascript)
  css ./node_modules/css-loader/dist/cjs.js!./src/app/fss/App.css 249 bytes [built]
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built]
  ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built]
WARNING in DefinePlugin
Conflicting values for 'process.env'
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 1 warning in 700 ms
<s> [webpack.Progress] 46% building 2/3 entries 4045/4300 dependencies 527/1071 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 46% building 2/3 entries 4900/4961 dependencies 641/1293 modules
<s> [webpack.Progress] 46% building 2/3 entries 5700/5794 dependencies 799/1496 modules
<s> [webpack.Progress] 46% building 2/3 entries 6100/6275 dependencies 923/1664 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 46% building 2/3 entries 7100/7204 dependencies 1062/2014 modules
<s> [webpack.Progress] 46% building 2/3 entries 8156/8300 dependencies 1349/2365 modules
<s> [webpack.Progress] 46% building 2/3 entries 9300/9409 dependencies 1654/2699 modules
<s> [webpack.Progress] 46% building 2/3 entries 10475/10600 dependencies 2001/2867 modules
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 46% building 2/3 entries 11530/11600 dependencies 2492/3107 modules
<s> [webpack.Progress] 46% building 2/3 entries 12574/12700 dependencies 3075/3225 modules
<s> [webpack.Progress] 64% building 3/3 entries 12872/12872 dependencies 3291/3291 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
(node:280) [DEP_WEBPACK_MODULE_UPDATE_HASH] DeprecationWarning: Module.updateHash: Use new ChunkGraph API
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
(node:280) [DEP_WEBPACK_CHUNK_MODULES_ITERABLE] DeprecationWarning: Chunk.modulesIterable: Use new ChunkGraph API
(node:280) [DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2] DeprecationWarning: ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/orders.css generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/orders.css generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/orders.css attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/orders.css attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
assets by path orders/assets/ 496 KiB
  assets by path orders/assets/gnav/ 478 KiB
    assets by path orders/assets/gnav/*.json 57.9 KiB 4 assets
    assets by path orders/assets/gnav/*.js 267 KiB 2 assets
    assets by path orders/assets/gnav/*.css 152 KiB 2 assets
  assets by path orders/assets/pi/*.js 15.4 KiB
    asset orders/assets/pi/encryption.js 14.6 KiB [emitted]
    asset orders/assets/pi/getkey.js 853 bytes [emitted]
  asset orders/assets/pdf_action_button.png 2.95 KiB [emitted]
  asset orders/assets/images/favicon.png 287 bytes [emitted]
assets by chunk 22.4 MiB (name: main)
  asset orders/js/orders.js 22.4 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset css/orders.css 11.8 KiB [emitted] (name: main) (id hint: vendors) 1 related asset
asset index.html 2.44 KiB [emitted]
Entrypoint main 22.4 MiB (20.4 MiB) = css/orders.css 11.8 KiB orders/js/orders.js 22.4 MiB 2 auxiliary assets
orphan modules 160 KiB [orphan] 197 modules
runtime modules 28.2 KiB 19 modules
modules by path ./node_modules/ 15.9 MiB (javascript) 6.86 KiB (unknown)
  javascript modules 15.4 MiB 2931 modules
  json modules 534 KiB 4 modules
  + 1 module
modules by path ./src/ 1.01 MiB (javascript) 4.94 KiB (unknown)
  modules by path ./src/app/orders/ 802 KiB (javascript) 4.94 KiB (unknown) 90 modules
  modules by path ./src/lib/ 236 KiB 61 modules
modules by path ./mock/orders/test/rebate/*.json 6.88 KiB
  ./mock/orders/test/rebate/rebateInfoMock.json 4.64 KiB [built] [code generated]
  ./mock/orders/test/rebate/submitRebateSucess.json 2.24 KiB [built] [code generated]
+ 5 modules
WARNING in DefinePlugin
Conflicting values for 'process.env'
5 WARNINGS in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 6 warnings in 18152 ms
<i> [webpack-dev-middleware] wait until bundle finished: /
<s> [webpack.Progress] 0% 
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 1% cache end idle
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 3% setup watch run webpack-cli
<s> [webpack.Progress] 3% setup watch run webpack-dev-middleware
<s> [webpack.Progress] 3% setup watch run
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 4% setup normal module factory IgnorePlugin
<s> [webpack.Progress] 4% setup normal module factory NormalModuleReplacementPlugin
<s> [webpack.Progress] 4% setup normal module factory
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 5% setup context module factory IgnorePlugin
<s> [webpack.Progress] 5% setup context module factory
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 6% setup before compile ProgressPlugin
<s> [webpack.Progress] 6% setup before compile
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 7% setup compile ExternalsPlugin
<s> [webpack.Progress] 7% setup compile
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 8% setup compilation mini-css-extract-plugin
<s> [webpack.Progress] 8% setup compilation HtmlWebpackPlugin
<s> [webpack.Progress] 8% setup compilation ArrayPushCallbackChunkFormatPlugin
<s> [webpack.Progress] 8% setup compilation JsonpChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation StartupChunkDependenciesPlugin
<s> [webpack.Progress] 8% setup compilation ImportScriptsChunkLoadingPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileWasmPlugin
<s> [webpack.Progress] 8% setup compilation FetchCompileAsyncWasmPlugin
<s> [webpack.Progress] 8% setup compilation WorkerPlugin
<s> [webpack.Progress] 8% setup compilation SplitChunksPlugin
<s> [webpack.Progress] 8% setup compilation ResolverCachePlugin
<s> [webpack.Progress] 8% setup compilation
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 9% setup compilation LimitChunkCountPlugin
<s> [webpack.Progress] 9% setup compilation ProgressPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation ChunkPrefetchPreloadPlugin
<s> [webpack.Progress] 9% setup compilation ModuleInfoHeaderPlugin
<s> [webpack.Progress] 9% setup compilation SourceMapDevToolPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptModulesPlugin
<s> [webpack.Progress] 9% setup compilation JsonModulesPlugin
<s> [webpack.Progress] 9% setup compilation AssetModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation RuntimePlugin
<s> [webpack.Progress] 9% setup compilation InferAsyncModulesPlugin
<s> [webpack.Progress] 9% setup compilation DataUriPlugin
<s> [webpack.Progress] 9% setup compilation FileUriPlugin
<s> [webpack.Progress] 9% setup compilation CompatibilityPlugin
<s> [webpack.Progress] 9% setup compilation HarmonyModulesPlugin
<s> [webpack.Progress] 9% setup compilation AMDPlugin
<s> [webpack.Progress] 9% setup compilation RequireJsStuffPlugin
<s> [webpack.Progress] 9% setup compilation CommonJsPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation LoaderPlugin
<s> [webpack.Progress] 9% setup compilation NodeStuffPlugin
<s> [webpack.Progress] 9% setup compilation APIPlugin
<s> [webpack.Progress] 9% setup compilation ExportsInfoApiPlugin
<s> [webpack.Progress] 9% setup compilation WebpackIsIncludedPlugin
<s> [webpack.Progress] 9% setup compilation ConstPlugin
<s> [webpack.Progress] 9% setup compilation UseStrictPlugin
<s> [webpack.Progress] 9% setup compilation RequireIncludePlugin
<s> [webpack.Progress] 9% setup compilation RequireEnsurePlugin
<s> [webpack.Progress] 9% setup compilation RequireContextPlugin
<s> [webpack.Progress] 9% setup compilation ImportPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaContextPlugin
<s> [webpack.Progress] 9% setup compilation SystemPlugin
<s> [webpack.Progress] 9% setup compilation ImportMetaPlugin
<s> [webpack.Progress] 9% setup compilation URLPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsFactoryPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPresetPlugin
<s> [webpack.Progress] 9% setup compilation DefaultStatsPrinterPlugin
<s> [webpack.Progress] 9% setup compilation JavascriptMetaInfoPlugin
<s> [webpack.Progress] 9% setup compilation EnsureChunkConditionsPlugin
<s> [webpack.Progress] 9% setup compilation RemoveEmptyChunksPlugin
<s> [webpack.Progress] 9% setup compilation MergeDuplicateChunksPlugin
<s> [webpack.Progress] 9% setup compilation SideEffectsFlagPlugin
<s> [webpack.Progress] 9% setup compilation FlagDependencyExportsPlugin
<s> [webpack.Progress] 9% setup compilation NamedModuleIdsPlugin
<s> [webpack.Progress] 9% setup compilation NamedChunkIdsPlugin
<s> [webpack.Progress] 9% setup compilation DefinePlugin
<s> [webpack.Progress] 9% setup compilation TemplatedPathPlugin
<s> [webpack.Progress] 9% setup compilation RecordIdsPlugin
<s> [webpack.Progress] 9% setup compilation WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation EntryPlugin
<s> [webpack.Progress] 9% setup compilation ProvidePlugin
<s> [webpack.Progress] 9% setup compilation HotModuleReplacementPlugin
<s> [webpack.Progress] 9% setup compilation
<s> [webpack.Progress] 10% building
<s> [webpack.Progress] 10% building 0/1 entries 0/0 dependencies 0/0 modules
<s> [webpack.Progress] 10% building 1/3 entries 6/16 dependencies 18/6 modules
<s> [webpack.Progress] 10% building 2/3 entries 15/16 dependencies 28/12 modules
(node:280) [DEP_WEBPACK_MODULE_NEED_REBUILD] DeprecationWarning: Module.needRebuild is deprecated in favor of Module.needBuild
<s> [webpack.Progress] 65% building 3/3 entries 585/585 dependencies 3291/163 modules
<s> [webpack.Progress] 65% building
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 69% building finish
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing finish module graph ResolverCachePlugin
<s> [webpack.Progress] 70% sealing finish module graph InferAsyncModulesPlugin
<s> [webpack.Progress] 70% sealing finish module graph FlagDependencyExportsPlugin
<s> [webpack.Progress] 70% sealing finish module graph
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 70% sealing plugins WarnCaseSensitiveModulesPlugin
<s> [webpack.Progress] 70% sealing plugins
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing dependencies optimization SideEffectsFlagPlugin
<s> [webpack.Progress] 71% sealing dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 71% sealing after dependencies optimization
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 72% sealing chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing after chunk graph
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 73% sealing optimizing
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 74% sealing module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing after module optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 75% sealing chunk optimization EnsureChunkConditionsPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization SplitChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization LimitChunkCountPlugin
<s> [webpack.Progress] 75% sealing chunk optimization RemoveEmptyChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization MergeDuplicateChunksPlugin
<s> [webpack.Progress] 75% sealing chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 76% sealing after chunk optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing module and chunk tree optimization PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 77% sealing module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 77% sealing after module and chunk tree optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 78% sealing after chunk modules optimization
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 79% sealing module reviving RecordIdsPlugin
<s> [webpack.Progress] 79% sealing module reviving
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing before module ids
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 80% sealing module ids NamedModuleIdsPlugin
<s> [webpack.Progress] 80% sealing module ids
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 81% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing module id optimization
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 82% sealing chunk reviving RecordIdsPlugin
<s> [webpack.Progress] 82% sealing chunk reviving
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 83% sealing before chunk ids
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk ids NamedChunkIdsPlugin
<s> [webpack.Progress] 84% sealing chunk ids
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 84% sealing chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 85% sealing after chunk id optimization
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record modules RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record modules
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 86% sealing record chunks RecordIdsPlugin
<s> [webpack.Progress] 86% sealing record chunks
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing module hashing
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 87% sealing code generation
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 88% sealing runtime requirements
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 89% sealing after hashing
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 90% sealing record hash
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing module assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 91% sealing chunk assets processing
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 92% sealing asset processing HotModuleReplacementPlugin
<s> [webpack.Progress] 92% sealing asset processing PersistentChildCompilerSingletonPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin css/orders.css restored cached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js generate SourceMap
Running 6 tests using 6 workers
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.23aba5721eefbf932622.hot-update.js generate SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.23aba5721eefbf932622.hot-update.js generated SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin orders/js/orders.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.23aba5721eefbf932622.hot-update.js attach SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin main.23aba5721eefbf932622.hot-update.js attached SourceMap
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing SourceMapDevToolPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin resolve sources
<s> [webpack.Progress] 92% sealing asset processing HtmlWebpackPlugin
<s> [webpack.Progress] 92% sealing asset processing
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing after asset optimization
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 93% sealing recording HotModuleReplacementPlugin
<s> [webpack.Progress] 93% sealing recording
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 94% sealing after seal
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 95% emitting emit ScriptExtHtmlWebpackPlugin
<s> [webpack.Progress] 95% emitting emit CopyPlugin
<s> [webpack.Progress] 95% emitting emit
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 98% emitting after emit CopyPlugin
<s> [webpack.Progress] 98% emitting after emit
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% done plugins webpack-dev-server
<s> [webpack.Progress] 99% done plugins webpack-dev-middleware
<s> [webpack.Progress] 99% done plugins
<s> [webpack.Progress] 99% 
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache store build dependencies
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 99% cache begin idle
<s> [webpack.Progress] 100% 
assets by status 14.3 KiB [cached] 2 assets
assets by status 22.4 MiB [emitted]
  asset orders/js/orders.js 22.4 MiB [emitted] (name: main) (id hint: vendors) 1 related asset
  asset main.23aba5721eefbf932622.hot-update.js 351 bytes [emitted] [immutable] [hmr] (name: main) (id hint: vendors) 1 related asset
  asset main.23aba5721eefbf932622.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 22.4 MiB (20.4 MiB) = css/orders.css 11.8 KiB orders/js/orders.js 22.4 MiB main.23aba5721eefbf932622.hot-update.js 351 bytes 3 auxiliary assets
cached modules 17.1 MiB [cached] 3286 modules
runtime modules 28.2 KiB 19 modules
modules by layer 11.8 KiB (unknown) 6.46 KiB (javascript)
  modules by path ./src/app/orders/ 4.94 KiB
    css ./node_modules/css-loader/dist/cjs.js!./src/app/orders/App.css 249 bytes [built]
    css ./node_modules/css-loader/dist/cjs.js!./src/app/orders/pages/Onboarding/common/Main.css 1.36 KiB [built]
    css ./node_modules/css-loader/dist/cjs.js!./src/app/orders/shared/components/OrderTracker/OrderTrackerCss.css 3.34 KiB [built]
  modules by path ./node_modules/ 6.86 KiB (unknown) 6.46 KiB (javascript)
    css ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/react/css/core.css 6.86 KiB [built]
    ./node_modules/.cache/moment-timezone-data-webpack-plugin/452cd15c362597b3581017...(truncated) 6.46 KiB [built]
WARNING in DefinePlugin
Conflicting values for 'process.env'
1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
webpack 5.96.1 compiled with 1 warning in 1964 ms
·····×××T
  1) [Google Chrome] › playwright-tests/orders-app.spec.ts:6:9 › orders-app › orders module page ───
    Test timeout of 60000ms exceeded.
    Error: locator.click: Test timeout of 60000ms exceeded.
    Call log:
      - waiting for getByTestId('order-detail-button12699968')
       8 |         await goToUrl(page, 'http://localhost:4001');
       9 |         await waitForTwoSeconds();
    > 10 |         await page.getByTestId('order-detail-button12699968').click();
         |                                                               ^
      11 |         await page.getByRole('tab', { name: 'Trade-ins' }).click({ force: true });
      12 |         await page.getByTestId('continue-button').click();
      13 |         await page.getByRole('tab', { name: 'Number transfer' }).click();
        at /builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/playwright-tests/orders-app.spec.ts:10:63
    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/orders-app-orders-app-orders-module-page-Google-Chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────
    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────
    Test timeout of 60000ms exceeded.
    Error: locator.click: Test timeout of 60000ms exceeded.
    Call log:
      - waiting for getByTestId('order-detail-button12699968')
       8 |         await goToUrl(page, 'http://localhost:4001');
       9 |         await waitForTwoSeconds();
    > 10 |         await page.getByTestId('order-detail-button12699968').click();
         |                                                               ^
      11 |         await page.getByRole('tab', { name: 'Trade-ins' }).click({ force: true });
      12 |         await page.getByTestId('continue-button').click();
      13 |         await page.getByRole('tab', { name: 'Number transfer' }).click();
        at /builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/playwright-tests/orders-app.spec.ts:10:63
    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/orders-app-orders-app-orders-module-page-Google-Chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────
    attachment #2: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/orders-app-orders-app-orders-module-page-Google-Chrome-retry1/trace.zip
    Usage:
        npx playwright show-trace test-results/orders-app-orders-app-orders-module-page-Google-Chrome-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────
    Test timeout of 60000ms exceeded.
    Error: locator.click: Test timeout of 60000ms exceeded.
    Call log:
      - waiting for getByTestId('order-detail-button12699968')
       8 |         await goToUrl(page, 'http://localhost:4001');
       9 |         await waitForTwoSeconds();
    > 10 |         await page.getByTestId('order-detail-button12699968').click();
         |                                                               ^
      11 |         await page.getByRole('tab', { name: 'Trade-ins' }).click({ force: true });
      12 |         await page.getByTestId('continue-button').click();
      13 |         await page.getByRole('tab', { name: 'Number transfer' }).click();
        at /builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/playwright-tests/orders-app.spec.ts:10:63
    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/orders-app-orders-app-orders-module-page-Google-Chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────
    Retry #3 ───────────────────────────────────────────────────────────────────────────────────────
    Test timeout of 60000ms exceeded.
    Error: locator.click: Test timeout of 60000ms exceeded.
    Call log:
      - waiting for getByTestId('order-detail-button12699968')
       8 |         await goToUrl(page, 'http://localhost:4001');
       9 |         await waitForTwoSeconds();
    > 10 |         await page.getByTestId('order-detail-button12699968').click();
         |                                                               ^
      11 |         await page.getByRole('tab', { name: 'Trade-ins' }).click({ force: true });
      12 |         await page.getByTestId('continue-button').click();
      13 |         await page.getByRole('tab', { name: 'Number transfer' }).click();
        at /builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/playwright-tests/orders-app.spec.ts:10:63
    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/orders-app-orders-app-orders-module-page-Google-Chrome-retry3/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [Google Chrome] › playwright-tests/orders-app.spec.ts:6:9 › orders-app › orders module page ────
  5 passed (4.2m)
Error: Command failed with exit code 1: npx playwright test --config=./playwright/playwright.config.ts
    at makeError (/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/node_modules/start-server-and-test/node_modules/execa/lib/error.js:60:11)
    at handlePromise (/builds/B6NV_MYVWEB/onevz-soe-digital-orders-static/app/node_modules/start-server-and-test/node_modules/execa/index.js:118:26)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  shortMessage: 'Command failed with exit code 1: npx playwright test --config=./playwright/playwright.config.ts',
  command: 'npx playwright test --config=./playwright/playwright.config.ts',
  escapedCommand: '"npx playwright test --config=./playwright/playwright.config.ts"',
  exitCode: 1,
  signal: undefined,
  signalDescription: undefined,
  stdout: undefined,
  stderr: undefined,
  failed: true,
  timedOut: false,
  isCanceled: false,
  killed: false
}
total 2440
-rw-r--r--    1 root     root           230 Apr 29 07:06 evConfig.json
drwxrwxrwx    2 root     root            68 May 26 13:52 webpack
-rw-rw-rw-    1 root     root          1568 May 26 13:52 test-report.xml
drwxrwxrwx    6 root     root            70 May 26 13:52 src
-rw-rw-rw-    1 root     root           375 May 26 13:52 sonar-project.properties
drwxrwxrwx    2 root     root           153 May 26 13:52 playwright-tests
drwxrwxrwx    9 root     root            95 May 26 13:52 mock
-rw-rw-rw-    1 root     root           116 May 26 13:52 debug.log
drwxrwxrwx    8 root     root           119 May 26 13:52 cypress
drwxrwxrwx    3 root     root           104 May 26 13:52 config
-rw-rw-rw-    1 root     root          3381 May 26 13:52 commitlint.config.js
-rw-rw-rw-    1 root     root           815 May 26 13:52 babel.config.js
drwxrwxrwx    7 root     root            87 May 26 13:52 app_template
drwxrwxrwx    2 root     root            45 May 26 13:52 __mocks__
-rw-rw-rw-    1 root     root          1278 May 26 13:52 Testsetup.js
drwxrwxrwx    2 root     root            27 May 26 13:52 .vscode
-rw-rw-rw-    1 root     root            90 May 26 13:52 .prettierrc
-rw-rw-rw-    1 root     root           531 May 26 13:52 .npmrc
-rw-rw-rw-    1 root     root           127 May 26 13:52 .gitignore
-rw-rw-rw-    1 root     root          1102 May 26 13:52 .eslintrc
-rw-rw-rw-    1 root     root           715 May 26 13:52 .eslintignore
-rw-rw-rw-    1 root     root           236 May 26 13:52 .editorconfig
-rw-rw-rw-    1 root     root            17 May 26 13:52 .browserslistrc
-rw-rw-rw-    1 root     root          6148 May 26 13:52 .DS_Store
drwxrwxrwx    3 root     root          4096 May 26 14:21 scripts
-rw-rw-rw-    1 root     root         13680 May 26 14:21 package.json
drwxrwxrwx    5 root     root          4096 May 26 14:21 ..
-rw-r--r--    1 root     root         13117 May 26 14:21 script.zip
-rw-r--r--    1 root     root         25044 May 26 14:21 mr_changes.json
-rw-rw-rw-    1 root     root       2272896 May 26 14:22 package-lock.json
drwxr-xr-x    3 root     root            33 May 26 14:23 .husky
drwxr-xr-x 1687 root     root         53248 May 26 14:23 node_modules
drwxr-xr-x   11 root     root          4096 May 26 14:27 test-results
drwxr-xr-x    4 root     root            49 May 26 14:27 playwright-report
drwxr-xr-x    4 root     root          4096 May 26 14:27 playwright
drwxrwxrwx   17 root     root          4096 May 26 14:27 .
total 52
drwxrwxrwx    4 root     root            88 May 26 13:51 ..
-rw-rw-rw-    1 root     root          1447 May 26 13:52 sonar-project.properties
-rw-rw-rw-    1 root     root          1333 May 26 13:52 nginx.conf
drwxrwxrwx    3 root     root            62 May 26 13:52 helm
-rw-rw-rw-    1 root     root           861 May 26 13:52 Unified_Jenkinsfile
-rw-rw-rw-    1 root     root           113 May 26 13:52 README.md
-rw-rw-rw-    1 root     root           643 May 26 13:52 Jenkinsfile-nsa
-rw-rw-rw-    1 root     root           306 May 26 13:52 Dockerfile
-rw-rw-rw-    1 root     root            84 May 26 13:52 .npmrc
-rw-rw-rw-    1 root     root           224 May 26 13:52 .gitlab-ci.yml
-rw-rw-rw-    1 root     root           444 May 26 13:52 .gitignore
-rw-rw-rw-    1 root     root           640 May 26 14:21 package.json
-rw-rw-rw-    1 root     root           225 May 26 14:21 package-lock.json
drwxrwxrwx    5 root     root          4096 May 26 14:21 .
drwxrwxrwx    6 root     root           128 May 26 14:23 .git
drwxrwxrwx   17 root     root          4096 May 26 14:27 app
total 72
-rw-r--r--    1 root     root          1053 Mar 14 11:21 playwright.global.ts
drwxr-xr-x    2 root     root           128 Mar 23 07:54 scripts
-rw-r--r--    1 root     root          4960 Mar 24 17:13 Playwright-README.md
-rw-r--r--    1 root     root          1855 Apr 15 15:43 baseTestExtension.ts
-rw-r--r--    1 root     root          2306 Apr 16 08:18 playwright.config.ts
-rwxr-xr-x    1 root     root           644 May  6 05:42 test.sh
-rwxr-xr-x    1 root     root          7540 May 23 15:14 pipelinee2e.sh
drwxr-xr-x    2 root     root          4096 May 26 14:24 results
-rw-r--r--    1 root     root         10435 May 26 14:27 results.xml
-rw-r--r--    1 root     root         21078 May 26 14:27 results.json
{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/11b1f42fec530f55eeb39c371c30ad9f86db29de.webm",
  "created" : "2025-05-26T10:27:51.573-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/11b1f42fec530f55eeb39c371c30ad9f86db29de.webm",
  "mimeType" : "application/octet-stream",
  "size" : "145042",
  "checksums" : {
    "sha1" : "11b1f42fec530f55eeb39c371c30ad9f86db29de",
    "md5" : "0ef9a12f26b62a7f2d916edd98e92a02",
    "sha256" : "cb4b19c6e49abea5a35fc5c1c12a0365c194f8a91792c8844cdf63ef471a10dd"
  },
  "originalChecksums" : {
    "sha256" : "cb4b19c6e49abea5a35fc5c1c12a0365c194f8a91792c8844cdf63ef471a10dd"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/11b1f42fec530f55eeb39c371c30ad9f86db29de.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/14babca39814b1dec23c0a92f22fcd08f55b47e6.webm",
  "created" : "2025-05-26T10:27:51.772-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/14babca39814b1dec23c0a92f22fcd08f55b47e6.webm",
  "mimeType" : "application/octet-stream",
  "size" : "1137763",
  "checksums" : {
    "sha1" : "14babca39814b1dec23c0a92f22fcd08f55b47e6",
    "md5" : "822296f8582a42decaa50a59d487ff5e",
    "sha256" : "485286997ed46c4e432d143df3173f528f66fcf03eab88e6034b4e6859e5dbdf"
  },
  "originalChecksums" : {
    "sha256" : "485286997ed46c4e432d143df3173f528f66fcf03eab88e6034b4e6859e5dbdf"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/14babca39814b1dec23c0a92f22fcd08f55b47e6.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/1656b46d1b937c427add1334e162d2fdf22c5f79.webm",
  "created" : "2025-05-26T10:27:51.958-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/1656b46d1b937c427add1334e162d2fdf22c5f79.webm",
  "mimeType" : "application/octet-stream",
  "size" : "166248",
  "checksums" : {
    "sha1" : "1656b46d1b937c427add1334e162d2fdf22c5f79",
    "md5" : "2d3664604b29b3aaf7cbd84e5349be39",
    "sha256" : "8b76a0ee3b0d97f148a8c3bfb7719a1b2c5135065f4ff4b5d9999cab7d5c5878"
  },
  "originalChecksums" : {
    "sha256" : "8b76a0ee3b0d97f148a8c3bfb7719a1b2c5135065f4ff4b5d9999cab7d5c5878"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/1656b46d1b937c427add1334e162d2fdf22c5f79.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/4f2b62cd6913efc4dabec7e899a306033e878262.webm",
  "created" : "2025-05-26T10:27:52.028-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/4f2b62cd6913efc4dabec7e899a306033e878262.webm",
  "mimeType" : "application/octet-stream",
  "size" : "317458",
  "checksums" : {
    "sha1" : "4f2b62cd6913efc4dabec7e899a306033e878262",
    "md5" : "fb9bec568d7c2a1a891d4805a2d58d2d",
    "sha256" : "26a0f06abbef0fad226d6b510752ced51b7176581164c73d9b128b107539e908"
  },
  "originalChecksums" : {
    "sha256" : "26a0f06abbef0fad226d6b510752ced51b7176581164c73d9b128b107539e908"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/4f2b62cd6913efc4dabec7e899a306033e878262.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/69a9900424eaaf0b4107cdcf9475ed0ed30afeb4.zip",
  "created" : "2025-05-26T10:27:52.193-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/69a9900424eaaf0b4107cdcf9475ed0ed30afeb4.zip",
  "mimeType" : "application/zip",
  "size" : "10039559",
  "checksums" : {
    "sha1" : "69a9900424eaaf0b4107cdcf9475ed0ed30afeb4",
    "md5" : "87aaa5203c3a9f0bb316e735cb265d53",
    "sha256" : "2495ded1aef6a56c7eb1f8f44a8f3e8fd708fe9b5b295963f601c89ecc220477"
  },
  "originalChecksums" : {
    "sha256" : "2495ded1aef6a56c7eb1f8f44a8f3e8fd708fe9b5b295963f601c89ecc220477"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/69a9900424eaaf0b4107cdcf9475ed0ed30afeb4.zip"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/853eeafa9bbf2c0f98ebea8fbfbe9d6e4ef9ada9.webm",
  "created" : "2025-05-26T10:27:52.277-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/853eeafa9bbf2c0f98ebea8fbfbe9d6e4ef9ada9.webm",
  "mimeType" : "application/octet-stream",
  "size" : "999598",
  "checksums" : {
    "sha1" : "853eeafa9bbf2c0f98ebea8fbfbe9d6e4ef9ada9",
    "md5" : "89334840eb0124e3af86b9780cb653fb",
    "sha256" : "5f765abeb434be284b2017985baf1c2e46d7d8461158caca2cf83107f2b16e4d"
  },
  "originalChecksums" : {
    "sha256" : "5f765abeb434be284b2017985baf1c2e46d7d8461158caca2cf83107f2b16e4d"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/853eeafa9bbf2c0f98ebea8fbfbe9d6e4ef9ada9.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/99a366b20a4d42abc044f1ae8a64b414ce8c4ed8.webm",
  "created" : "2025-05-26T10:27:52.355-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/99a366b20a4d42abc044f1ae8a64b414ce8c4ed8.webm",
  "mimeType" : "application/octet-stream",
  "size" : "997489",
  "checksums" : {
    "sha1" : "99a366b20a4d42abc044f1ae8a64b414ce8c4ed8",
    "md5" : "5b56fdc232d5f9a625bdefacc8c2a6de",
    "sha256" : "62271837c853d1ed79f86736515ec47fd2dd349a9c488ad0435349ba436f73c0"
  },
  "originalChecksums" : {
    "sha256" : "62271837c853d1ed79f86736515ec47fd2dd349a9c488ad0435349ba436f73c0"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/99a366b20a4d42abc044f1ae8a64b414ce8c4ed8.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/b0a082589b2ef3737d882186ab062e3f41a88495.webm",
  "created" : "2025-05-26T10:27:52.418-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/b0a082589b2ef3737d882186ab062e3f41a88495.webm",
  "mimeType" : "application/octet-stream",
  "size" : "138078",
  "checksums" : {
    "sha1" : "b0a082589b2ef3737d882186ab062e3f41a88495",
    "md5" : "4ab7ce2e0eb7dbf23883796b4444d10d",
    "sha256" : "e35311bca5f179f57e686d262926adcf050aa7adb37add677146dafa9b335080"
  },
  "originalChecksums" : {
    "sha256" : "e35311bca5f179f57e686d262926adcf050aa7adb37add677146dafa9b335080"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/b0a082589b2ef3737d882186ab062e3f41a88495.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/caf2619b22eaea9175c5951d9702657e64dbdbb3.webm",
  "created" : "2025-05-26T10:27:52.487-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/caf2619b22eaea9175c5951d9702657e64dbdbb3.webm",
  "mimeType" : "application/octet-stream",
  "size" : "131224",
  "checksums" : {
    "sha1" : "caf2619b22eaea9175c5951d9702657e64dbdbb3",
    "md5" : "8d3c45673eeb762a045c4d84abe18ae8",
    "sha256" : "c96034aaa377ea0ce12cb242a0dc4c9acdc02fa19e0cb7d82ced4dbced893a97"
  },
  "originalChecksums" : {
    "sha256" : "c96034aaa377ea0ce12cb242a0dc4c9acdc02fa19e0cb7d82ced4dbced893a97"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/caf2619b22eaea9175c5951d9702657e64dbdbb3.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/f6d77bcbf150456141984e609f383f5148451a97.webm",
  "created" : "2025-05-26T10:27:52.560-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/f6d77bcbf150456141984e609f383f5148451a97.webm",
  "mimeType" : "application/octet-stream",
  "size" : "792497",
  "checksums" : {
    "sha1" : "f6d77bcbf150456141984e609f383f5148451a97",
    "md5" : "1d8fc0d79fd50f0d7232b067f5e71ad9",
    "sha256" : "e9251c5afe0dbf78f0fe686a30cdc3dd0cde68a06e36f6da106365eeef91556f"
  },
  "originalChecksums" : {
    "sha256" : "e9251c5afe0dbf78f0fe686a30cdc3dd0cde68a06e36f6da106365eeef91556f"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/f6d77bcbf150456141984e609f383f5148451a97.webm"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-curbside-app-curbside_module_page.html",
  "created" : "2025-05-26T08:59:13.667-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-curbside-app-curbside_module_page.html",
  "mimeType" : "text/html",
  "size" : "270619",
  "checksums" : {
    "sha1" : "e3b41e37e15c49e5a91f6a32ba5b76378ee763ca",
    "md5" : "169e8913575fbe83cb0a0d98037b06d3",
    "sha256" : "00b5ffab9a06a59488b513d4c49816bec573cb26a52b450fd3eef9ed133d1f93"
  },
  "originalChecksums" : {
    "sha256" : "00b5ffab9a06a59488b513d4c49816bec573cb26a52b450fd3eef9ed133d1f93"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-curbside-app-curbside_module_page.html"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-fss-app-fss_module_page.html",
  "created" : "2025-05-26T08:59:13.737-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-fss-app-fss_module_page.html",
  "mimeType" : "text/html",
  "size" : "377461",
  "checksums" : {
    "sha1" : "66ae22521dd92aabb2a81a58250a8e0f7e44a08a",
    "md5" : "c16c40932c1b1b21e5b5bcbf160452db",
    "sha256" : "ffae5dc6e825589d74c2ddd730b32beee8de2679d981d113c50594433443faf9"
  },
  "originalChecksums" : {
    "sha256" : "ffae5dc6e825589d74c2ddd730b32beee8de2679d981d113c50594433443faf9"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-fss-app-fss_module_page.html"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-nav-app-nav_module_page.html",
  "created" : "2025-05-26T08:59:13.804-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-nav-app-nav_module_page.html",
  "mimeType" : "text/html",
  "size" : "257847",
  "checksums" : {
    "sha1" : "16932f45bc89c86220ea86c9a72192e073dce6d5",
    "md5" : "3f010b63f8c6f64ee7972fb080ae5061",
    "sha256" : "28e9342005a03d146810625bc94af3484c62ade40dfa40e693538bda8721a203"
  },
  "originalChecksums" : {
    "sha256" : "28e9342005a03d146810625bc94af3484c62ade40dfa40e693538bda8721a203"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-nav-app-nav_module_page.html"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-orders-app-orders_module_page.html",
  "created" : "2025-05-26T08:59:13.870-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-orders-app-orders_module_page.html",
  "mimeType" : "text/html",
  "size" : "296815",
  "checksums" : {
    "sha1" : "fcfcf39a18698b952dda26cfa6c5af184d2580e3",
    "md5" : "18f50a7514b98a64425b808a7532d3b8",
    "sha256" : "2bd20acec592f8644d3819016316680d392a359af4d9d1578f6d5fb53282866b"
  },
  "originalChecksums" : {
    "sha256" : "2bd20acec592f8644d3819016316680d392a359af4d9d1578f6d5fb53282866b"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-orders-app-orders_module_page.html"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-raf-app-raf_module_page.html",
  "created" : "2025-05-26T08:59:13.941-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-raf-app-raf_module_page.html",
  "mimeType" : "text/html",
  "size" : "279923",
  "checksums" : {
    "sha1" : "131798307347d45ccc1b7fff10c0d7b7e2184152",
    "md5" : "6aac594bc82e65c827dcb0abc4c7c2c5",
    "sha256" : "ba30be7ad9d0789de8f9f740dde0038052781e844e805c61c29b434504dbc1a3"
  },
  "originalChecksums" : {
    "sha256" : "ba30be7ad9d0789de8f9f740dde0038052781e844e805c61c29b434504dbc1a3"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-raf-app-raf_module_page.html"
}{
  "repo" : "HIVV_SOE",
  "path" : "/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-scan-app-scan_module_page.html",
  "created" : "2025-05-26T08:59:14.025-04:00",
  "createdBy" : "svc-edge-tool",
  "downloadUri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-scan-app-scan_module_page.html",
  "mimeType" : "text/html",
  "size" : "638468",
  "checksums" : {
    "sha1" : "b5e70905696decc5f16945371bdf854ce939354c",
    "md5" : "1e0dd1e0396da214b8ed90b4f277d31b",
    "sha256" : "88bfb4d09091dcfe7bdc499b1c29129436dce924c9309822b09125235c8386c9"
  },
  "originalChecksums" : {
    "sha256" : "88bfb4d09091dcfe7bdc499b1c29129436dce924c9309822b09125235c8386c9"
  },
  "uri" : "https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-scan-app-scan_module_page.html"
}
========================================
Please find the E2E Session recorded video links below:
========================================
1. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/11b1f42fec530f55eeb39c371c30ad9f86db29de.webm
2. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/14babca39814b1dec23c0a92f22fcd08f55b47e6.webm
3. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/1656b46d1b937c427add1334e162d2fdf22c5f79.webm
4. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/4f2b62cd6913efc4dabec7e899a306033e878262.webm
5. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/69a9900424eaaf0b4107cdcf9475ed0ed30afeb4.zip
6. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/853eeafa9bbf2c0f98ebea8fbfbe9d6e4ef9ada9.webm
7. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/99a366b20a4d42abc044f1ae8a64b414ce8c4ed8.webm
8. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/b0a082589b2ef3737d882186ab062e3f41a88495.webm
9. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/caf2619b22eaea9175c5951d9702657e64dbdbb3.webm
10. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/f6d77bcbf150456141984e609f383f5148451a97.webm
========================================
Please find the Accessibility HTML error reports below:
========================================
1. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-curbside-app-curbside_module_page.html
2. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-fss-app-fss_module_page.html
3. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-nav-app-nav_module_page.html
4. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-orders-app-orders_module_page.html
5. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-raf-app-raf_module_page.html
6. https://oneartifactoryci.verizon.com/artifactory/HIVV_SOE/vzw/cv9v/gitlabci/evinced/act150-3452/UPSdroppOff/onevz-soe-digital-orders-static/report-scan-app-scan_module_page.html
Database connected successfully
Exclusions []
[
  [
    'f793411a-8eb3-43c8-9a6c-841130eff482',
    false,
    '227b427e-9a7f-44d3-89ec-5866530c9689',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:43.124Z',
    '2025-05-26T14:23:43.124Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    '6b21812d',
    '6b21812d',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'curbside-app-curbside_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4003/',
    ''
  ],
  [
    'ad2e964c-94d9-4406-bd2f-4e58e3c885bf',
    false,
    '215e39f9-a731-47ef-9ace-6c326393af64',
    false,
    'NON_INTERACTIVE_IN_FOCUS_SEQUENCE',
    'Non-Interactive in Focus Sequence',
    '2025-05-26T14:23:42.873Z',
    '2025-05-26T14:23:42.873Z',
    "The page's focus sequence should include only elements allowing user interaction, including elements with scrollable content.",
    '**Cause:** A non-interactive element has a tabindex attribute with value of “0" or higher.\n' +
      "**Effect:** When the page's focus is set on an element, it means that it is ready to be activated. Still, if the element is not interactive, it may confuse and frustrate users.\n" +
      '**Suggested Solutions:**\n' +
      'Remove the tabindex attribute. If the element is used as an anchor for skip links, change the tabindex value to “-1" so the element is excluded from the focus sequence but still can receive the focus programmatically.',
    'BEST_PRACTICE',
    'Best Practice',
    'MINOR',
    'Minor',
    'https://knowledge.evinced.com/system-validations/non-interactive-in-focus-sequence',
    '2c43d09e',
    '2c43d09e',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'fss-app-fss_module_page',
    'B6NV_MYVWEB',
    '<div tabindex="0" aria-label="loader animation" class="StyledLoader-VDS__sc-27g4au-1 leIiMO"></div>',
    'div[aria-label="loader animation"]',
    'Verizon Wireless - Support',
    'http://localhost:4005/',
    ''
  ],
  [
    '6e9d8050-8402-427f-8b4f-a8599c3ff5b2',
    false,
    '712d5fe6-0f3e-4ed3-9fef-ce6abf7cc40b',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:43.296Z',
    '2025-05-26T14:23:43.296Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    '28d5205b',
    '28d5205b',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'fss-app-fss_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4005/',
    ''
  ],
  [
    '5e8a8f10-ca39-4cd1-b055-309e02c7b903',
    false,
    '81b4f5bb-7d20-48c8-8392-a0dea1796dab',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:43.402Z',
    '2025-05-26T14:23:43.402Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    'bc41cfe8',
    'bc41cfe8',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'nav-app-nav_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4006/',
    ''
  ],
  [
    '4cf5f1a0-91fd-4802-8f3e-f990efebea09',
    false,
    '9de5165b-2779-41e8-9a63-de1d77ae97d7',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:26:52.402Z',
    '2025-05-26T14:26:52.402Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    '823da8c7',
    '823da8c7',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'orders-app-orders_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4001/',
    ''
  ],
  [
    '8425d56d-9ac2-4258-93c2-9cf87a29edd9',
    false,
    '9d7745d8-e7cf-4459-b49b-6f4a97552834',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:43.367Z',
    '2025-05-26T14:23:43.367Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    'f8f0ce0a',
    'f8f0ce0a',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'raf-app-raf_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4004/',
    ''
  ],
  [
    '62a62c67-8eaf-41d7-8c7a-2100b55510c3',
    false,
    '72656e04-4c97-4df8-815e-8d4b923cc4f9',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:43.142Z',
    '2025-05-26T14:23:43.142Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    'e3f38df4',
    'e3f38df4',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4002/',
    ''
  ],
  [
    '913458a4-5853-4cf2-916b-8eaad2854649',
    false,
    '6314b739-2a88-4d53-a202-5128e72d6135',
    false,
    'NO_DESCRIPTIVE_TEXT',
    'Accessible Name',
    '2025-05-26T14:23:46.010Z',
    '2025-05-26T14:23:46.010Z',
    'The element is missing a textual attribute that indicates which information or action is being asked of the user and/or the outcome of interacting with it.',
    '**Cause:** An interactable element requires textual description in order to inform the screen reader of its purpose and function.\n' +
      '**Effect:** Insufficient information about the element limits its interactability.\n' +
      '**Suggested Solutions:**\n' +
      '* Add the appropriate descriptive text to the body of the tag.\n' +
      '* Add the appropriate attributes to the tag itself.',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/accessible-name',
    '04791fad',
    '04791fad',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<button class="round-button"></button>',
    '.cA-DMId > div > div > div > div > div:nth-child(1) > button',
    'Verizon Wireless - Support',
    'http://localhost:4002/scan',
    ''
  ],
  [
    'dd7a37b5-5d69-464d-9899-1cf5ca2aa742',
    false,
    'e365907e-d2e1-4485-bd5c-8db1fd90a431',
    false,
    'AXE-BUTTON-NAME',
    'Button-name',
    '2025-05-26T14:23:46.245Z',
    '2025-05-26T14:23:46.245Z',
    'Buttons must have discernible text',
    '**Suggested Solutions:** Fix at least one (1) of the following\n' +
      `* Element does not have inner text that is visible to screen readers,* aria-label attribute does not exist or is empty,* aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty,* Element has no title attribute,* Element's default semantics were not overridden with role="none" or role="presentation"\n`,
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/button-name',
    '56cc519d',
    '56cc519d',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<button class="round-button"></button>',
    '.cA-DMId > div > div > div > div > div:nth-child(1) > button',
    'Verizon Wireless - Support',
    'http://localhost:4002/scan',
    ''
  ],
  [
    '89e89b26-1704-433a-96d1-95b474dfe97c',
    false,
    'c6f92ef8-89ad-4823-8aa7-745f358d00e7',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:48.909Z',
    '2025-05-26T14:23:48.909Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    '3c3f5d21',
    '3c3f5d21',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4002/scan',
    ''
  ],
  [
    'd54b33e5-af00-4d30-9469-81593bbf2dde',
    false,
    '3cde49b4-a635-4a53-993d-7ac73e0bfa63',
    false,
    'NO_DESCRIPTIVE_TEXT',
    'Accessible Name',
    '2025-05-26T14:23:48.717Z',
    '2025-05-26T14:23:48.717Z',
    'The element is missing a textual attribute that indicates which information or action is being asked of the user and/or the outcome of interacting with it.',
    '**Cause:** An interactable element requires textual description in order to inform the screen reader of its purpose and function.\n' +
      '**Effect:** Insufficient information about the element limits its interactability.\n' +
      '**Suggested Solutions:**\n' +
      '* Add the appropriate descriptive text to the body of the tag.\n' +
      '* Add the appropriate attributes to the tag itself.',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/accessible-name',
    '210c62b1',
    '210c62b1',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<button class="round-button"></button>',
    '.round-button',
    'Verizon Wireless - Support',
    'http://localhost:4002/scan',
    ''
  ],
  [
    '4b0e9592-e33a-42d8-a68e-cf77f8fd20ad',
    false,
    '53df96fa-80fd-45bb-a16c-1ceedd5b2f13',
    false,
    'AXE-BUTTON-NAME',
    'Button-name',
    '2025-05-26T14:23:48.909Z',
    '2025-05-26T14:23:51.738Z',
    'Buttons must have discernible text',
    '**Suggested Solutions:** Fix at least one (1) of the following\n' +
      `* Element does not have inner text that is visible to screen readers,* aria-label attribute does not exist or is empty,* aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty,* Element has no title attribute,* Element's default semantics were not overridden with role="none" or role="presentation"\n`,
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/button-name',
    '8da01041',
    '8da01041',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<button class="round-button"></button>',
    '.round-button',
    'Verizon Wireless - Support',
    'http://localhost:4002/scan',
    ''
  ],
  [
    'ce6d784f-89b0-4a6c-bf9c-7e9d526f337c',
    false,
    'bd52a804-56fb-4e38-a5fe-355b86fc9276',
    false,
    'AXE-META-VIEWPORT',
    'Meta-viewport',
    '2025-05-26T14:23:52.561Z',
    '2025-05-26T14:23:52.561Z',
    'Zooming and scaling must not be disabled',
    '**Description:**\n' +
      '\tEnsure <meta name="viewport"> does not disable text scaling and zooming\n' +
      '\t**Failure Summary:**\n' +
      '\tFix at least one (1) of the following\n' +
      '* user-scalable=no on <meta> tag disables zooming on mobile devices',
    'CRITICAL',
    'Critical',
    'CRITICAL',
    'Critical',
    'https://knowledge.evinced.com/system-validations/meta-viewport',
    'b57a4fa4',
    'b57a4fa4',
    '1.1',
    false,
    true,
    'onevz-soe-digital-orders-static',
    'scan-app-scan_module_page',
    'B6NV_MYVWEB',
    '<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    'meta:nth-child(12)',
    'Verizon Wireless - Support',
    'http://localhost:4002/submit',
    ''
  ]
]
13 Records inserted to update failure status of the user: srudsa <sanjjay.s@verizon.com>
Error: One / more of your End to end test cases have been failed. Please check the logs and retrigger them
ERROR: New accessibility issues have been found ===> 13
ERROR: Overall accessibility issues have been found ===> 13
Please resolve the accessibility issues. Click on the above JSON link to see the error report.
Running after_script
00:01
Running after script...
$ echo "Cleaning up temporary files..."
Cleaning up temporary files...
Cleaning up project directory and file based variables
00:00
ERROR: Job failed: exit code 1
