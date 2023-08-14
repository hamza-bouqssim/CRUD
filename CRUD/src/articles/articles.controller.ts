import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('Articles')
export class ArticlesController {
  constructor(private  articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse ({type: ArticleEntity})
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiCreatedResponse ({type: ArticleEntity})
  findAll() {
    return this.articlesService.findAll();
  }
  @Get('drafts')
  @ApiCreatedResponse ({type: ArticleEntity, isArray: true})
  findDrafts(){
    return this.articlesService.findDrafts();
  }
  @Get(':id')
  @ApiCreatedResponse ({type: ArticleEntity, isArray: true})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const specificArticle = await this.articlesService.findOne(id);
    if(!specificArticle)
      return new NotFoundException(`Articles with this id: ${id} Not found!`);
    return specificArticle;
  }

  @Patch(':id')
  @ApiCreatedResponse ({type: ArticleEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse ({type: ArticleEntity})
  async remove(@Param('id', ParseIntPipe) id: number) {
    const article = await this.articlesService.remove(id);
    if(!article)
      return new NotFoundException(`Article with this id: ${id} not found`);
    return article;
  }
}
