using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WordleHelper
{
    /// <summary>
    /// Query options for the Wordle Helper API
    /// </summary>
    public class WordleHelperQueryOptions
    {
        /// <summary>
        /// Correct letters with positions (e.g., A1 means A at position 1)
        /// </summary>
        [JsonProperty("green")]
        public string Green { get; set; }

        /// <summary>
        /// Letters in word but wrong position (e.g., R2 means R not at position 2); each entry is a letter with an optional position 1-5
        /// </summary>
        [JsonProperty("yellow")]
        public string Yellow { get; set; }

        /// <summary>
        /// Letters not in the word. A letter that is also green or yellow is capped at the number of times it is marked green or yellow, as in Wordle's duplicate-letter rule
        /// </summary>
        [JsonProperty("gray")]
        public string Gray { get; set; }

        /// <summary>
        /// Pattern with known letters (use _ for unknown)
        /// </summary>
        [JsonProperty("pattern")]
        public string Pattern { get; set; }

        /// <summary>
        /// Maximum number of suggestions
        /// </summary>
        [JsonProperty("limit")]
        public int? Limit { get; set; }
    }
}
