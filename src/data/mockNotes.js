/**
 * Mock notes data for Stage 2 UI development.
 * Will be replaced with Firestore reads in Stage 3.
 *
 * Each note has:
 *   id, word, recipient, emotion, story, color, createdAt
 */
export const mockNotes = [
  {
    id: 'note-1',
    word: 'I miss you.',
    recipient: 'HOME',
    emotion: 'Longing',
    story: "There are days when everything I do feels like it's waiting for you to be there to see it. I built something small today and my first thought was — I wish you were here. It wasn't a big moment. But those are the ones that hurt the most.",
    color: 'yellow',
    createdAt: '2026-06-28',
  },
  {
    id: 'note-2',
    word: 'Thank you for staying.',
    recipient: 'A',
    emotion: 'Gratitude',
    story: "You stayed when it made no sense to. You didn't ask for anything in return. I never said this out loud, so I'm writing it down — you changed what I thought people were capable of.",
    color: 'green',
    createdAt: '2026-06-30',
  },
  {
    id: 'note-3',
    word: 'I should have said yes.',
    recipient: 'M',
    emotion: 'Regret',
    story: "You asked me once, quietly, if I wanted to start over. I said no because I was scared. I've replayed that moment more times than I can count. This is me saying yes — even if you'll never hear it.",
    color: 'pink',
    createdAt: '2026-07-01',
  },
  {
    id: 'note-4',
    word: 'I loved you quietly.',
    recipient: 'L',
    emotion: 'Love',
    story: "I never told you. I smiled when you walked in, found reasons to stay in the same room, laughed a little too much at everything you said. I loved you the way you love rain — from a safe distance, never letting it touch you.",
    color: 'pink',
    createdAt: '2026-07-02',
  },
  {
    id: 'note-5',
    word: 'It gets better.',
    recipient: 'SELF',
    emotion: 'Hope',
    story: "I'm writing this to the version of me who couldn't get out of bed last March. You made it. You're still here. Not every day is beautiful yet, but enough of them are. That's enough.",
    color: 'blue',
    createdAt: '2026-07-03',
  },
  {
    id: 'note-6',
    word: 'You never knew.',
    recipient: 'R',
    emotion: 'Longing',
    story: "We talked every day for a year and then we didn't. I never told you what those conversations meant to me. I kept waiting for the right time. There wasn't one. There never is.",
    color: 'yellow',
    createdAt: '2026-07-04',
  },
];
