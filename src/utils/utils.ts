import { postComment } from "./api";

const commentSeeds = [
    {
        name: "Amelia Morgan",
        message: "That's what painting is all about. It should make you feel good when you paint. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. You can get away with a lot. Work on one thing at a time. Don't get carried away - we have plenty of time.",
    },
    {
        name: "Robert Miller",
        message: "Just let go - and fall like a little waterfall. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Let all these little things happen. Don't fight them. Learn to use them. You can create anything that makes you happy.",
    },
    {
        name: "Lillian Kelly",
        message: "And just raise cain. Let's make some happy little clouds in our world. Be brave. Don't fiddle with it all day.",
    },
    {
        name: "Una Jackson",
        message: "Nice little clouds playing around in the sky. Decide where your cloud lives. Maybe he lives right in here. In painting, you have unlimited power. You have the ability to move mountains. Every day I learn. La- da- da- da- dah. Just be happy.",
    },
    {
        name: "Yvonne Graham",
        message: "A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Here we're limited by the time we have. It all happens automatically. A thin paint will stick to a thick paint.",
    },
    {
        name: "Evan Simpson",
        message: "We can fix anything. We'll lay all these little funky little things in there. Every time you practice, you learn more. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. It's hard to see things when you're too close. Take a step back and look. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart.",
    },
    {
        name: "Michelle	Bell",
        message: "It's beautiful - and we haven't even done anything to it yet. Everybody needs a friend. This is your world, whatever makes you happy you can put in it. Go crazy.",
    },
    {
        name: "Oliver Reid",
        message: "These trees are so much fun. I get started on them and I have a hard time stopping. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow.",
    },
]

export const seedStarterComments = () => {
    commentSeeds.map((seed) => {
        postComment(seed.name, seed.message);
    })
}
