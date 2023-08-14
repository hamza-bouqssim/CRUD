import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor( private  prisma: PrismaService){} // this is a way to get an external service, is to initialize it with the constructor

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({data: createArticleDto});
  }

  findAll() {
    return this.prisma.article.findMany({where:{ published: true}});
  }
  findDrafts() {
    return this.prisma.article.findMany({where: {published: false}});
  }

  async findOne(id: number) {
    return this.prisma.article.findUnique({where: {id}})
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {id},
    data: updateArticleDto,
  });
  }

  async remove(id: number) {
    return this.prisma.article.delete({where: {id}});
  }
}
