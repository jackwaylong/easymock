var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":44,"id":2807,"methods":[{"el":33,"sc":5,"sl":31},{"el":37,"sc":5,"sl":35},{"el":43,"sc":5,"sl":39}],"name":"Not","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1246":{"methods":[{"sl":31},{"sl":39}],"name":"notToString","pass":true,"statements":[{"sl":32},{"sl":40},{"sl":41},{"sl":42}]},"test_1419":{"methods":[{"sl":31},{"sl":35}],"name":"notOverloaded","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_1583":{"methods":[{"sl":31},{"sl":35}],"name":"testNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_176":{"methods":[{"sl":31}],"name":"equalsMissing","pass":true,"statements":[{"sl":32}]},"test_1953":{"methods":[{"sl":31},{"sl":35}],"name":"notOverloaded","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_1955":{"methods":[{"sl":31},{"sl":39}],"name":"notToString","pass":true,"statements":[{"sl":32},{"sl":40},{"sl":41},{"sl":42}]},"test_2023":{"methods":[{"sl":31},{"sl":39}],"name":"notToString","pass":true,"statements":[{"sl":32},{"sl":40},{"sl":41},{"sl":42}]},"test_2063":{"methods":[{"sl":31},{"sl":35}],"name":"testNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_2191":{"methods":[{"sl":31},{"sl":35}],"name":"notOverloaded","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_2252":{"methods":[{"sl":31},{"sl":35}],"name":"testNotNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_2329":{"methods":[{"sl":31}],"name":"equalsMissing","pass":true,"statements":[{"sl":32}]},"test_2469":{"methods":[{"sl":31}],"name":"equalsMissing","pass":true,"statements":[{"sl":32}]},"test_2555":{"methods":[{"sl":31},{"sl":35}],"name":"testNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_2576":{"methods":[{"sl":31}],"name":"equalsMissing","pass":true,"statements":[{"sl":32}]},"test_2626":{"methods":[{"sl":31},{"sl":35}],"name":"notOverloaded","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_2643":{"methods":[{"sl":31},{"sl":35}],"name":"testNotNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_279":{"methods":[{"sl":31},{"sl":35}],"name":"testNotNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_2869":{"methods":[{"sl":31},{"sl":35}],"name":"testNotNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_30":{"methods":[{"sl":31}],"name":"equalsMissing","pass":true,"statements":[{"sl":32}]},"test_365":{"methods":[{"sl":31},{"sl":39}],"name":"notToString","pass":true,"statements":[{"sl":32},{"sl":40},{"sl":41},{"sl":42}]},"test_464":{"methods":[{"sl":31},{"sl":35}],"name":"testNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_494":{"methods":[{"sl":31},{"sl":39}],"name":"notToString","pass":true,"statements":[{"sl":32},{"sl":40},{"sl":41},{"sl":42}]},"test_644":{"methods":[{"sl":31},{"sl":35}],"name":"testNotNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_686":{"methods":[{"sl":31},{"sl":35}],"name":"testNull","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_94":{"methods":[{"sl":31},{"sl":35}],"name":"notOverloaded","pass":true,"statements":[{"sl":32},{"sl":36}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [176, 686, 94, 30, 2191, 2576, 2063, 2252, 1953, 2555, 2329, 2023, 464, 2869, 2626, 2469, 494, 1583, 1955, 279, 644, 365, 1246, 1419, 2643], [176, 686, 94, 30, 2191, 2576, 2063, 2252, 1953, 2555, 2329, 2023, 464, 2869, 2626, 2469, 494, 1583, 1955, 279, 644, 365, 1246, 1419, 2643], [], [], [686, 94, 2191, 2063, 2252, 1953, 2555, 464, 2869, 2626, 1583, 279, 644, 1419, 2643], [686, 94, 2191, 2063, 2252, 1953, 2555, 464, 2869, 2626, 1583, 279, 644, 1419, 2643], [], [], [2023, 494, 1955, 365, 1246], [2023, 494, 1955, 365, 1246], [2023, 494, 1955, 365, 1246], [2023, 494, 1955, 365, 1246], [], []]