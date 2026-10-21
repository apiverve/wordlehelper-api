# Wordle Helper API - Ruby Gem

Wordle Helper is a Wordle solver API that finds possible 5-letter word solutions based on known letter positions, letters in wrong positions, and eliminated letters.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_wordlehelper'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_wordlehelper
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_wordlehelper'

# Initialize the client
client = APIVerve::Wordlehelper::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  green: "A1,E5",
  yellow: "R2,O3",
  gray: "STLN",
  pattern: "A___E",
  limit: 25
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ green: "A1,E5", yellow: "R2,O3", gray: "STLN", pattern: "A___E", limit: 25 })
  puts response["data"]
rescue APIVerve::Wordlehelper::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Wordlehelper::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Wordlehelper::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordlehelper?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordlehelper?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordlehelper?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
