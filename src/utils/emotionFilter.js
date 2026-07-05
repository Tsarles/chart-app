/**
 * Emotion filter — client-side blocklist to reject offensive emotion inputs.
 * Uses lowercased substring matching against a curated list.
 *
 * Returns { valid, message } where message is only set if invalid.
 */

const BLOCKED_PATTERNS = [
  // slurs & hate
  'nigger', 'nigga', 'faggot', 'fag', 'retard', 'tranny', 'chink',
  'spic', 'wetback', 'kike', 'dyke', 'cunt',
  // profanity
  'fuck', 'shit', 'bitch', 'ass', 'dick', 'cock', 'pussy',
  'bastard', 'damn', 'whore', 'slut',
  // sexual
  'porn', 'sex', 'horny', 'orgasm', 'nude', 'naked',
  'erotic', 'fetish', 'hentai', 'milf',
  // violence
  'kill', 'murder', 'rape', 'suicide', 'die',
  // harassment
  'stupid', 'idiot', 'dumb', 'ugly', 'loser', 'trash',
];

const FRIENDLY_MESSAGE = 'Please choose an emotion that respectfully reflects your feelings.';

/**
 * Validate an emotion string.
 * @param {string} text - The user's emotion input
 * @returns {{ valid: boolean, message?: string }}
 */
export function validateEmotion(text) {
  if (!text || !text.trim()) {
    return { valid: true };
  }

  const lower = text.toLowerCase().trim();

  for (const pattern of BLOCKED_PATTERNS) {
    if (lower.includes(pattern)) {
      return { valid: false, message: FRIENDLY_MESSAGE };
    }
  }

  return { valid: true };
}
