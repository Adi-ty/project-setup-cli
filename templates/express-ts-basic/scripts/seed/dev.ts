import db from '../../src/utils/db';

const run = async () => {
    await db.post.createMany({
        data: [
            {
                title: 'My first post',
                content: 'Hello world!',
                published: true,
                authorId: 1,
            },
            {
                title: 'My second post',
                content: 'Hello world again!',
                published: true,
                authorId: 1,
            },
            {
                title: 'My third post',
                content: 'Hello world once more!',
                published: true,
                authorId: 1,
            },
            {
                title: 'My fourth post',
                content: 'Hello world for the fourth time!',
                published: false,
                authorId: 1,
            },
        ],
    });
};

if (require.main === module) {
    run().then(() => {
        console.log('Data Seed Complete');
        process.exit();
    });
}
