<?php
/**
 * JsonWebKeySetGeneratorRequest
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
 * JsonWebKeySetGeneratorRequest Class Doc Comment
 *
 * @category    Class
 * @package     keto\SDK
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class JsonWebKeySetGeneratorRequest implements ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      * @var string
      */
    protected static $swaggerModelName = 'jsonWebKeySetGeneratorRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerTypes = [
        'alg' => 'string',
        'kid' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerFormats = [
        'alg' => null,
        'kid' => null
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
        'alg' => 'alg',
        'kid' => 'kid'
    ];


    /**
     * Array of attributes to setter functions (for deserialization of responses)
     * @var string[]
     */
    protected static $setters = [
        'alg' => 'setAlg',
        'kid' => 'setKid'
    ];


    /**
     * Array of attributes to getter functions (for serialization of requests)
     * @var string[]
     */
    protected static $getters = [
        'alg' => 'getAlg',
        'kid' => 'getKid'
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
        $this->container['alg'] = isset($data['alg']) ? $data['alg'] : null;
        $this->container['kid'] = isset($data['kid']) ? $data['kid'] : null;
    }

    /**
     * show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalid_properties = [];

        if ($this->container['alg'] === null) {
            $invalid_properties[] = "'alg' can't be null";
        }
        if ($this->container['kid'] === null) {
            $invalid_properties[] = "'kid' can't be null";
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

        if ($this->container['alg'] === null) {
            return false;
        }
        if ($this->container['kid'] === null) {
            return false;
        }
        return true;
    }


    /**
     * Gets alg
     * @return string
     */
    public function getAlg()
    {
        return $this->container['alg'];
    }

    /**
     * Sets alg
     * @param string $alg The algorithm to be used for creating the key. Supports \"RS256\", \"ES512\", \"HS512\", and \"HS256\"
     * @return $this
     */
    public function setAlg($alg)
    {
        $this->container['alg'] = $alg;

        return $this;
    }

    /**
     * Gets kid
     * @return string
     */
    public function getKid()
    {
        return $this->container['kid'];
    }

    /**
     * Sets kid
     * @param string $kid The kid of the key to be created
     * @return $this
     */
    public function setKid($kid)
    {
        $this->container['kid'] = $kid;

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


