# hades\SDK\PolicyApi
Client for hades

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPolicy**](PolicyApi.md#createPolicy) | **POST** /policies | 
[**deletePolicy**](PolicyApi.md#deletePolicy) | **DELETE** /policies/{id} | 
[**getPolicy**](PolicyApi.md#getPolicy) | **GET** /policies/{id} | 
[**listPolicies**](PolicyApi.md#listPolicies) | **GET** /policies | 
[**updatePolicy**](PolicyApi.md#updatePolicy) | **PUT** /policies/{id} | 


# **createPolicy**
> \hades\SDK\Model\Policy createPolicy($body)



Create an Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new hades\SDK\Api\PolicyApi();
$body = new \hades\SDK\Model\Policy(); // \hades\SDK\Model\Policy | 

try {
    $result = $api_instance->createPolicy($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PolicyApi->createPolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\hades\SDK\Model\Policy**](../Model/Policy.md)|  | [optional]

### Return type

[**\hades\SDK\Model\Policy**](../Model/Policy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deletePolicy**
> deletePolicy($id)



Delete an Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new hades\SDK\Api\PolicyApi();
$id = "id_example"; // string | The id of the policy.

try {
    $api_instance->deletePolicy($id);
} catch (Exception $e) {
    echo 'Exception when calling PolicyApi->deletePolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the policy. |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPolicy**
> \hades\SDK\Model\Policy getPolicy($id)



Get an Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new hades\SDK\Api\PolicyApi();
$id = "id_example"; // string | The id of the policy.

try {
    $result = $api_instance->getPolicy($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PolicyApi->getPolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the policy. |

### Return type

[**\hades\SDK\Model\Policy**](../Model/Policy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listPolicies**
> \hades\SDK\Model\Policy[] listPolicies($offset, $limit)



List Access Control Policies

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new hades\SDK\Api\PolicyApi();
$offset = 789; // int | The offset from where to start looking.
$limit = 789; // int | The maximum amount of policies returned.

try {
    $result = $api_instance->listPolicies($offset, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PolicyApi->listPolicies: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| The offset from where to start looking. | [optional]
 **limit** | **int**| The maximum amount of policies returned. | [optional]

### Return type

[**\hades\SDK\Model\Policy[]**](../Model/Policy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updatePolicy**
> \hades\SDK\Model\Policy updatePolicy($id, $body)



Update an Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new hades\SDK\Api\PolicyApi();
$id = "id_example"; // string | The id of the policy.
$body = new \hades\SDK\Model\Policy(); // \hades\SDK\Model\Policy | 

try {
    $result = $api_instance->updatePolicy($id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PolicyApi->updatePolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the policy. |
 **body** | [**\hades\SDK\Model\Policy**](../Model/Policy.md)|  | [optional]

### Return type

[**\hades\SDK\Model\Policy**](../Model/Policy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

