/**
 * EmotionBadge — colored pill label for note emotions.
 *
 * Supported emotions: Longing, Love, Regret, Hope, Gratitude
 * Falls back to default gray for unknown emotions.
 */
export function EmotionBadge({ emotion }) {
  const emotionClass = emotion
    ? `emotion-${emotion.toLowerCase()}`
    : 'emotion-default';

  return (
    <span className={`emotion-badge ${emotionClass}`}>
      {emotion || 'Unknown'}
    </span>
  );
}
