<?php
/**
 * SwaggerJwkUpdateSet
 *
 * PHP version 5
 *
 * @category Class
 * @package  keto\SDK
 * @author   Swaagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace keto\SDK\Model;

use \ArrayAccess;

/**
 * SwaggerJwkUpdateSet Class Doc Comment
 *
 * @category    Class
 * @package     keto\SDK
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class SwaggerJwkUpdateSet implements ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      * @var string
      */
    protected static $swaggerModelName = 'swaggerJwkUpdateSet';

    /**
      * Array of property to type mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerTypes = [
        'body' => '\keto\SDK\Model\JsonWebKeySet',
        'set' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerFormats = [
        'body' => null,
        'set' => null
    ];

    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name, and the value is the original name
     * @var string[]
     */
    protected static $attributeMap = [
        'body' => 'Body',
        'set' => 'set'
    ];


    /**
     * Array of attributes to setter functions (for deserialization of responses)
     * @var string[]
     */
    protected static $setters = [
        'body' => 'setBody',
        'set' => 'setSet'
    ];


    /**
     * Array of attributes to getter functions (for serialization of requests)
     * @var string[]
     */
    protected static $getters = [
        'body' => 'getBody',
        'set' => 'getSet'
    ];

    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    public static function setters()
    {
        return self::$setters;
    }

    public static function getters()
    {
        return self::$getters;
    }

    

    

    /**
     * Associative array for storing property values
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['body'] = isset($data['body']) ? $data['body'] : null;
        $this->container['set'] = isset($data['set']) ? $data['set'] : null;
    }

    /**
     * show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalid_properties = [];

        if ($this->container['set'] === null) {
            $invalid_properties[] = "'set' can't be null";
        }
        return $invalid_properties;
    }

    /**
     * validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {

        if ($this->container['set'] === null) {
            return false;
        }
        return true;
    }


    /**
     * Gets body
     * @return \keto\SDK\Model\JsonWebKeySet
     */
    public function getBody()
    {
        return $this->container['body'];
    }

    /**
     * Sets body
     * @param \keto\SDK\Model\JsonWebKeySet $body
     * @return $this
     */
    public function setBody($body)
    {
        $this->container['body'] = $body;

        return $this;
    }

    /**
     * Gets set
     * @return string
     */
    public function getSet()
    {
        return $this->container['set'];
    }

    /**
     * Sets set
     * @param string $set The set in: path
     * @return $this
     */
    public function setSet($set)
    {
        $this->container['set'] = $set;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     * @param  integer $offset Offset
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     * @param  integer $offset Offset
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     * @param  integer $offset Offset
     * @param  mixed   $value  Value to be set
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     * @param  integer $offset Offset
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(\keto\SDK\ObjectSerializer::sanitizeForSerialization($this), JSON_PRETTY_PRINT);
        }

        return json_encode(\keto\SDK\ObjectSerializer::sanitizeForSerialization($this));
    }
}


