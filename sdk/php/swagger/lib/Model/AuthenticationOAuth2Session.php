<?php
/**
 * AuthenticationOAuth2Session
 *
 * PHP version 5
 *
 * @category Class
 * @package  hades\SDK
 * @author   Swaagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Package main ORY Hades
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

namespace hades\SDK\Model;

use \ArrayAccess;

/**
 * AuthenticationOAuth2Session Class Doc Comment
 *
 * @category    Class
 * @package     hades\SDK
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class AuthenticationOAuth2Session implements ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      * @var string
      */
    protected static $swaggerModelName = 'authenticationOAuth2Session';

    /**
      * Array of property to type mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerTypes = [
        'access_token_extra' => 'map[string,object]',
        'allowed' => 'bool',
        'audience' => 'string',
        'client_id' => 'string',
        'expires_at' => '\DateTime',
        'granted_scopes' => 'string[]',
        'issued_at' => '\DateTime',
        'issuer' => 'string',
        'not_before' => '\DateTime',
        'subject' => 'string',
        'username' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerFormats = [
        'access_token_extra' => null,
        'allowed' => null,
        'audience' => null,
        'client_id' => null,
        'expires_at' => 'date-time',
        'granted_scopes' => null,
        'issued_at' => 'date-time',
        'issuer' => null,
        'not_before' => 'date-time',
        'subject' => null,
        'username' => null
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
        'access_token_extra' => 'accessTokenExtra',
        'allowed' => 'allowed',
        'audience' => 'audience',
        'client_id' => 'clientId',
        'expires_at' => 'expiresAt',
        'granted_scopes' => 'grantedScopes',
        'issued_at' => 'issuedAt',
        'issuer' => 'issuer',
        'not_before' => 'notBefore',
        'subject' => 'subject',
        'username' => 'username'
    ];


    /**
     * Array of attributes to setter functions (for deserialization of responses)
     * @var string[]
     */
    protected static $setters = [
        'access_token_extra' => 'setAccessTokenExtra',
        'allowed' => 'setAllowed',
        'audience' => 'setAudience',
        'client_id' => 'setClientId',
        'expires_at' => 'setExpiresAt',
        'granted_scopes' => 'setGrantedScopes',
        'issued_at' => 'setIssuedAt',
        'issuer' => 'setIssuer',
        'not_before' => 'setNotBefore',
        'subject' => 'setSubject',
        'username' => 'setUsername'
    ];


    /**
     * Array of attributes to getter functions (for serialization of requests)
     * @var string[]
     */
    protected static $getters = [
        'access_token_extra' => 'getAccessTokenExtra',
        'allowed' => 'getAllowed',
        'audience' => 'getAudience',
        'client_id' => 'getClientId',
        'expires_at' => 'getExpiresAt',
        'granted_scopes' => 'getGrantedScopes',
        'issued_at' => 'getIssuedAt',
        'issuer' => 'getIssuer',
        'not_before' => 'getNotBefore',
        'subject' => 'getSubject',
        'username' => 'getUsername'
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
        $this->container['access_token_extra'] = isset($data['access_token_extra']) ? $data['access_token_extra'] : null;
        $this->container['allowed'] = isset($data['allowed']) ? $data['allowed'] : null;
        $this->container['audience'] = isset($data['audience']) ? $data['audience'] : null;
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['expires_at'] = isset($data['expires_at']) ? $data['expires_at'] : null;
        $this->container['granted_scopes'] = isset($data['granted_scopes']) ? $data['granted_scopes'] : null;
        $this->container['issued_at'] = isset($data['issued_at']) ? $data['issued_at'] : null;
        $this->container['issuer'] = isset($data['issuer']) ? $data['issuer'] : null;
        $this->container['not_before'] = isset($data['not_before']) ? $data['not_before'] : null;
        $this->container['subject'] = isset($data['subject']) ? $data['subject'] : null;
        $this->container['username'] = isset($data['username']) ? $data['username'] : null;
    }

    /**
     * show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalid_properties = [];

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

        return true;
    }


    /**
     * Gets access_token_extra
     * @return map[string,object]
     */
    public function getAccessTokenExtra()
    {
        return $this->container['access_token_extra'];
    }

    /**
     * Sets access_token_extra
     * @param map[string,object] $access_token_extra Extra represents arbitrary session data.
     * @return $this
     */
    public function setAccessTokenExtra($access_token_extra)
    {
        $this->container['access_token_extra'] = $access_token_extra;

        return $this;
    }

    /**
     * Gets allowed
     * @return bool
     */
    public function getAllowed()
    {
        return $this->container['allowed'];
    }

    /**
     * Sets allowed
     * @param bool $allowed Allowed is true if the request is allowed and false otherwise.
     * @return $this
     */
    public function setAllowed($allowed)
    {
        $this->container['allowed'] = $allowed;

        return $this;
    }

    /**
     * Gets audience
     * @return string
     */
    public function getAudience()
    {
        return $this->container['audience'];
    }

    /**
     * Sets audience
     * @param string $audience
     * @return $this
     */
    public function setAudience($audience)
    {
        $this->container['audience'] = $audience;

        return $this;
    }

    /**
     * Gets client_id
     * @return string
     */
    public function getClientId()
    {
        return $this->container['client_id'];
    }

    /**
     * Sets client_id
     * @param string $client_id ClientID is the id of the OAuth2 client that requested the token.
     * @return $this
     */
    public function setClientId($client_id)
    {
        $this->container['client_id'] = $client_id;

        return $this;
    }

    /**
     * Gets expires_at
     * @return \DateTime
     */
    public function getExpiresAt()
    {
        return $this->container['expires_at'];
    }

    /**
     * Sets expires_at
     * @param \DateTime $expires_at ExpiresAt is the expiry timestamp.
     * @return $this
     */
    public function setExpiresAt($expires_at)
    {
        $this->container['expires_at'] = $expires_at;

        return $this;
    }

    /**
     * Gets granted_scopes
     * @return string[]
     */
    public function getGrantedScopes()
    {
        return $this->container['granted_scopes'];
    }

    /**
     * Sets granted_scopes
     * @param string[] $granted_scopes GrantedScopes is a list of scopes that the subject authorized when asked for consent.
     * @return $this
     */
    public function setGrantedScopes($granted_scopes)
    {
        $this->container['granted_scopes'] = $granted_scopes;

        return $this;
    }

    /**
     * Gets issued_at
     * @return \DateTime
     */
    public function getIssuedAt()
    {
        return $this->container['issued_at'];
    }

    /**
     * Sets issued_at
     * @param \DateTime $issued_at IssuedAt is the token creation time stamp.
     * @return $this
     */
    public function setIssuedAt($issued_at)
    {
        $this->container['issued_at'] = $issued_at;

        return $this;
    }

    /**
     * Gets issuer
     * @return string
     */
    public function getIssuer()
    {
        return $this->container['issuer'];
    }

    /**
     * Sets issuer
     * @param string $issuer Issuer is the id of the issuer, typically an hydra instance.
     * @return $this
     */
    public function setIssuer($issuer)
    {
        $this->container['issuer'] = $issuer;

        return $this;
    }

    /**
     * Gets not_before
     * @return \DateTime
     */
    public function getNotBefore()
    {
        return $this->container['not_before'];
    }

    /**
     * Sets not_before
     * @param \DateTime $not_before
     * @return $this
     */
    public function setNotBefore($not_before)
    {
        $this->container['not_before'] = $not_before;

        return $this;
    }

    /**
     * Gets subject
     * @return string
     */
    public function getSubject()
    {
        return $this->container['subject'];
    }

    /**
     * Sets subject
     * @param string $subject Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.
     * @return $this
     */
    public function setSubject($subject)
    {
        $this->container['subject'] = $subject;

        return $this;
    }

    /**
     * Gets username
     * @return string
     */
    public function getUsername()
    {
        return $this->container['username'];
    }

    /**
     * Sets username
     * @param string $username
     * @return $this
     */
    public function setUsername($username)
    {
        $this->container['username'] = $username;

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
            return json_encode(\hades\SDK\ObjectSerializer::sanitizeForSerialization($this), JSON_PRETTY_PRINT);
        }

        return json_encode(\hades\SDK\ObjectSerializer::sanitizeForSerialization($this));
    }
}


