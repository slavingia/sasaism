import { LensPrompt } from '../types';

export const prompts: LensPrompt[] = [
  // IDENTITY — depth 1
  { id: 'id01', text: 'You are someone who just changed their name to leave their past behind.', category: 'identity', depth: 1, actions: ['Tell someone their new name', 'Look in the mirror and practice saying it', 'Write a letter to their old self', 'Delete their old social media'] },
  { id: 'id02', text: 'You are someone who realized they have been pretending to like something for years.', category: 'identity', depth: 1, actions: ['Quietly stop pretending', 'Confess to a friend', 'Try it one last time to be sure', 'Feel relieved and laugh'] },
  { id: 'id03', text: 'You are someone wearing a uniform for the first time.', category: 'identity', depth: 1, actions: ['Stand taller and adjust the collar', 'Take a selfie', 'Feel like an imposter', 'Show their family'] },
  { id: 'id04', text: 'You are someone hearing their voice recorded for the first time.', category: 'identity', depth: 1, actions: ['Cringe and ask to delete it', 'Listen again, curious', 'Laugh at how different it sounds', 'Wonder if this is how everyone hears them'] },
  { id: 'id05', text: 'You are someone who just discovered they were adopted.', category: 'identity', depth: 2, actions: ['Call their parents to talk', 'Search for biological parents', 'Sit in silence processing', 'Tell no one and carry it alone'] },
  { id: 'id06', text: 'You are someone speaking their native language for the first time in years.', category: 'identity', depth: 2, actions: ['Cry unexpectedly', 'Call a family member back home', 'Stumble over forgotten words', 'Feel a warmth spread through their chest'] },

  // CONNECTION — depth 1
  { id: 'co01', text: 'You are someone making eye contact with a stranger on the train who looks exactly like someone you lost.', category: 'connection', depth: 1, actions: ['Look away quickly', 'Smile at them', 'Get off at the next stop', 'Say hello'] },
  { id: 'co02', text: 'You are someone whose neighbor just brought them soup without being asked.', category: 'connection', depth: 1, actions: ['Invite them in', 'Cry at the kitchen table', 'Bring them something back tomorrow', 'Eat the soup alone, feeling grateful'] },
  { id: 'co03', text: 'You are someone who just found out a stranger saved their life years ago.', category: 'connection', depth: 1, actions: ['Try to find and thank them', 'Write about it', 'Live differently from now on', 'Tell everyone they know'] },
  { id: 'co04', text: 'You are someone hearing "I forgive you" after a decade.', category: 'connection', depth: 2, actions: ['Say nothing—just breathe', 'Apologize again', 'Ask if they truly mean it', 'Hug them'] },
  { id: 'co05', text: 'You are someone teaching a child to ride a bike.', category: 'connection', depth: 1, actions: ['Let go without telling them', 'Run alongside a little longer', 'Cheer loudly when they balance', 'Remember learning themselves'] },
  { id: 'co06', text: 'You are someone waving goodbye to a friend moving to another country.', category: 'connection', depth: 1, actions: ['Promise to visit', 'Hold back tears until the car leaves', 'Give them one more hug', 'Walk home the long way'] },

  // LOSS — depth 1
  { id: 'lo01', text: 'You are someone returning to a childhood home that is now someone else\'s.', category: 'loss', depth: 1, actions: ['Drive past slowly', 'Knock on the door', 'Take a photo from the sidewalk', 'Keep driving and don\'t look back'] },
  { id: 'lo02', text: 'You are someone throwing away the last belonging of someone who passed.', category: 'loss', depth: 2, actions: ['Keep it—they can\'t do it yet', 'Close the trash lid and walk away', 'Hold it one more time', 'Give it to someone else instead'] },
  { id: 'lo03', text: 'You are someone who just missed a flight that was supposed to change everything.', category: 'loss', depth: 1, actions: ['Book the next one', 'Sit in the terminal and cry', 'Call someone to talk', 'Wonder if it was a sign'] },
  { id: 'lo04', text: 'You are someone packing up an office on their last day at a job they loved.', category: 'loss', depth: 1, actions: ['Leave a note for the next person', 'Take one last look around', 'Walk out without looking back', 'Take a photo of the empty desk'] },
  { id: 'lo05', text: 'You are someone hearing a song that used to be "our song."', category: 'loss', depth: 1, actions: ['Change the station', 'Listen to the whole thing', 'Sing along quietly', 'Let the memories wash over them'] },
  { id: 'lo06', text: 'You are someone watching the last sunset from a place they\'ll never return to.', category: 'loss', depth: 2, actions: ['Take a photo', 'Just watch in silence', 'Write something in the sand', 'Tell the place thank you'] },

  // DISCOVERY — depth 1
  { id: 'di01', text: 'You are someone seeing snow for the first time at age 40.', category: 'discovery', depth: 1, actions: ['Catch a snowflake on their tongue', 'Stand still and stare', 'Call someone to describe it', 'Cry from the beauty'] },
  { id: 'di02', text: 'You are someone who just learned they can sing.', category: 'discovery', depth: 1, actions: ['Sing louder', 'Record themselves', 'Feel embarrassed and stop', 'Wonder why no one told them before'] },
  { id: 'di03', text: 'You are someone reading a sentence that perfectly describes a feeling they could never name.', category: 'discovery', depth: 1, actions: ['Read it again three times', 'Send it to everyone they know', 'Underline it and close the book', 'Feel less alone'] },
  { id: 'di04', text: 'You are someone tasting a fruit from a country they\'ve never visited.', category: 'discovery', depth: 1, actions: ['Close their eyes to focus on the taste', 'Look up where it grows', 'Share it with someone', 'Buy ten more'] },
  { id: 'di05', text: 'You are someone who just realized their enemy was fighting the same battle.', category: 'discovery', depth: 2, actions: ['Reach out to them', 'Sit with the realization quietly', 'Forgive them silently', 'Feel ashamed of their own anger'] },
  { id: 'di06', text: 'You are someone finding a letter their younger self wrote to their future self.', category: 'discovery', depth: 1, actions: ['Read it aloud', 'Write a letter back', 'Laugh at their younger hopes', 'Cry because they kept the promises'] },
  { id: 'di07', text: 'You are someone who just learned that a stranger they helped years ago became successful.', category: 'discovery', depth: 1, actions: ['Feel quietly proud', 'Reach out to reconnect', 'Tell no one', 'Wonder about other ripples they\'ve caused'] },

  // CONFLICT — depth 1
  { id: 'cf01', text: 'You are someone who just said something they can\'t take back.', category: 'conflict', depth: 1, actions: ['Apologize immediately', 'Walk away', 'Double down', 'Stand in the silence'] },
  { id: 'cf02', text: 'You are someone being thanked for something they did for the wrong reasons.', category: 'conflict', depth: 1, actions: ['Accept the thanks quietly', 'Confess the real reason', 'Decide to earn the gratitude retroactively', 'Change the subject'] },
  { id: 'cf03', text: 'You are someone who found out their mentor lied about something important.', category: 'conflict', depth: 2, actions: ['Confront them directly', 'Distance themselves quietly', 'Try to understand why', 'Pretend they don\'t know'] },
  { id: 'cf04', text: 'You are someone choosing between what is right and what is kind.', category: 'conflict', depth: 2, actions: ['Choose right', 'Choose kind', 'Find a third way', 'Do nothing and agonize'] },
  { id: 'cf05', text: 'You are someone who accidentally overheard a friend speaking badly about them.', category: 'conflict', depth: 1, actions: ['Walk away pretending they didn\'t hear', 'Confront them now', 'Wait and bring it up later', 'Reevaluate the friendship in silence'] },
  { id: 'cf06', text: 'You are someone who has to deliver bad news to someone they love.', category: 'conflict', depth: 1, actions: ['Say it directly', 'Ease into it gently', 'Write it in a letter', 'Hold them first, then speak'] },

  // GROWTH — depth 1
  { id: 'gr01', text: 'You are someone finishing something they started ten years ago.', category: 'growth', depth: 1, actions: ['Celebrate quietly alone', 'Call the person who inspired them', 'Start the next thing immediately', 'Sit and feel the completeness'] },
  { id: 'gr02', text: 'You are someone choosing to walk away from something comfortable.', category: 'growth', depth: 1, actions: ['Leave without explanation', 'Write a goodbye note', 'Take one thing to remember it by', 'Promise themselves they won\'t look back'] },
  { id: 'gr03', text: 'You are someone forgiving themselves for the first time.', category: 'growth', depth: 2, actions: ['Say it out loud to the mirror', 'Write it down and burn the paper', 'Tell someone what they forgave', 'Simply stop carrying it'] },
  { id: 'gr04', text: 'You are someone standing up for someone else for the first time.', category: 'growth', depth: 1, actions: ['Speak firmly with a steady voice', 'Shake with adrenaline but hold ground', 'Put a hand on the other person\'s shoulder', 'Walk both of them away from the situation'] },
  { id: 'gr05', text: 'You are someone planting a tree they will never see fully grown.', category: 'growth', depth: 1, actions: ['Tell it to grow strong', 'Imagine who will sit under it', 'Water it carefully', 'Mark the spot so others know'] },
  { id: 'gr06', text: 'You are someone learning to ask for help after a lifetime of independence.', category: 'growth', depth: 2, actions: ['Mumble the request quietly', 'Practice the words first', 'Send a text instead of speaking', 'Look the person in the eye and ask clearly'] },

  // MEMORY — depth 1
  { id: 'me01', text: 'You are someone smelling a scent that instantly takes them back 20 years.', category: 'memory', depth: 1, actions: ['Close their eyes and stay there', 'Buy whatever carries that scent', 'Tell someone about the memory', 'Walk faster past the feeling'] },
  { id: 'me02', text: 'You are someone watching home videos they forgot existed.', category: 'memory', depth: 1, actions: ['Laugh at the hairstyles', 'Pause on a face they miss', 'Watch the whole thing twice', 'Show their children'] },
  { id: 'me03', text: 'You are someone visiting their old school after 30 years.', category: 'memory', depth: 1, actions: ['Touch the same locker', 'Find their old classroom', 'Feel how small everything seems now', 'Leave before the nostalgia overwhelms'] },
  { id: 'me04', text: 'You are someone recognizing their mother\'s handwriting on an old grocery list.', category: 'memory', depth: 2, actions: ['Keep the list forever', 'Trace the letters with their finger', 'Cook everything on the list', 'Call their mother if they still can'] },
  { id: 'me05', text: 'You are someone remembering the exact moment they fell in love.', category: 'memory', depth: 1, actions: ['Smile to themselves', 'Tell the person about that moment', 'Write it down so they never forget', 'Let the feeling fill their chest'] },
  { id: 'me06', text: 'You are someone finding a drawing their child made of their family.', category: 'memory', depth: 1, actions: ['Frame it', 'Ask the child to explain each person', 'Notice they drew everyone smiling', 'Keep it in their wallet'] },

  // HOPE — depth 1
  { id: 'ho01', text: 'You are someone watching their child take their first steps.', category: 'hope', depth: 1, actions: ['Reach out their arms', 'Hold their breath', 'Film it through tears', 'Let them fall and get back up'] },
  { id: 'ho02', text: 'You are someone opening a letter that begins with "Congratulations."', category: 'hope', depth: 1, actions: ['Read it three times', 'Call someone screaming', 'Sit down because their knees gave out', 'Frame the letter'] },
  { id: 'ho03', text: 'You are someone deciding to try again after everyone said to give up.', category: 'hope', depth: 1, actions: ['Start immediately, fueled by doubt', 'Tell no one this time', 'Write down why they\'re doing it', 'Take a deep breath and begin'] },
  { id: 'ho04', text: 'You are someone watching dawn after staying awake through the darkest night of their life.', category: 'hope', depth: 2, actions: ['Whisper "I made it"', 'Make coffee and face the day', 'Cry with relief', 'Call someone and say "I\'m still here"'] },
  { id: 'ho05', text: 'You are someone buying a crib three months before the baby arrives.', category: 'hope', depth: 1, actions: ['Assemble it immediately', 'Put a hand on the rail and imagine', 'Take a photo to send to family', 'Sit in the nursery in silence'] },
  { id: 'ho06', text: 'You are someone who just voted for the first time.', category: 'hope', depth: 1, actions: ['Wear the sticker proudly all day', 'Call their grandparent who couldn\'t vote', 'Post about it', 'Feel the weight of their voice'] },
];

export function getRandomPrompt(maxDepth: number = 1): LensPrompt {
  const available = prompts.filter((p) => p.depth <= maxDepth);
  return available[Math.floor(Math.random() * available.length)];
}

export function getPromptById(id: string): LensPrompt | undefined {
  return prompts.find((p) => p.id === id);
}
