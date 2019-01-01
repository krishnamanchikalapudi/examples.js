
## Pre-requisite
- [NodeJS](https://nodejs.org/en/)
- Install nodeJs serverless library
`````
npm install serverless -g
`````

## LOCAL execution
### Invoke the Function
- To test your function locally:
`````
serverless invoke local -f xml2json -p handler.js
`````
- function response
`````
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless! function executed successfully!\"}"
}
`````


## REMOTE 'AWS'
### Deploy the Service
`````
serverless deploy -v
`````

### Deploy the Function
- Use this to quickly upload and overwrite your function code, allowing you to develop faster.
`````
serverless deploy function -f xml2json
`````

### Invoke the Function
- To test your function remotely:
`````
sls invoke -f xml2json
`````
- The expected result should be similar to:
`````
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless! function executed successfully!\"}"
}
`````

### Fetch the Function Logs
`````
serverless logs -f xml2json --tail
`````

### Clean
`````
serverless remove
`````
