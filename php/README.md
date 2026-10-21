# Wordle Helper API - PHP Package

Wordle Helper is a Wordle solver API that finds possible 5-letter word solutions based on known letter positions, letters in wrong positions, and eliminated letters.

## Installation

Install via Composer:

```bash
composer require apiverve/wordlehelper
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Wordlehelper\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'green' => 'A1,E5',
    'yellow' => 'R2,O3',
    'gray' => 'STLN',
    'pattern' => 'A___E',
    'limit' => 25
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Wordlehelper\Client;
use APIVerve\Wordlehelper\Exceptions\APIException;
use APIVerve\Wordlehelper\Exceptions\ValidationException;

try {
    $response = $client->execute(['green' => 'A1,E5', 'yellow' => 'R2,O3', 'gray' => 'STLN', 'pattern' => 'A___E', 'limit' => 25]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "matchCount": 11,
    "suggestions": [
      "adore",
      "afore",
      "afire",
      "argue",
      "aerie",
      "azure",
      "aurae",
      "arame",
      "agree",
      "aware",
      "areae"
    ],
    "filters": {
      "green": {
        "0": "a",
        "4": "e"
      },
      "yellow": [
        "r"
      ],
      "gray": [
        "s",
        "t",
        "l",
        "n"
      ]
    },
    "pattern": "A___E"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordlehelper?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordlehelper?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordlehelper?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
