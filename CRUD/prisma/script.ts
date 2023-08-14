import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const post1 = await prisma.article.upsert({
        where: { title: 'tagmart n ismdal'},
        update: {},
        create: {
            title: 'tagmart n ismdal',
            body: 'tawda',
            description:
            "yan lfilm lli issiwidn mnchk ayad, amma ghilad walo",
            published: false,
        }
    })

    const post2 = await prisma.article.upsert({
        where: { title: 'Boutfounast'},
        update: {},
        create: {
            title: 'Boutounast',
            body: 'walli mo okern tafounast nsn',
            description:
            "tssenm yad tadmint f 40 numkhar, ghwid okrn tafounast iyyan , mach ntta iga chchatir irortid soul frant soul",
            published: true,
        }
    });
    console.log({post1, post2});
}
main().catch((e) => {
    console.error(e);
    process.exit(2);
}).finally(async () => {
    await prisma.$disconnect();
});