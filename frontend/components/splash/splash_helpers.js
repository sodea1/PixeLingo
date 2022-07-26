export const getTopic = () => {
    const searchTopics = ["adventure", "culture", "nature", "language", "travel"];
    const randomTopic = searchTopics[Math.floor(Math.random(searchTopics.length))];
    return randomTopic;
}