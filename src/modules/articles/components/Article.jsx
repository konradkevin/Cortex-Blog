import React from "react";

// Styles
import "./Article.css";
import LangContext from "../../../contexts/LangContext";
import authorIcon from "../../../media/icons/author.png";
import tagIcon from "../../../media/icons/tag.png";
import calendarIcon from "../../../media/icons/calendar.png";
import arrowIcon from "../../../media/icons/arrow_right.png";
// Styles

function Article(article, index) {
  const {language} = React.useContext(LangContext);
  const {content, title, authors, categories, picture, tags, first_publish} = article;

  return (
    <div class="blog-card" key={index}>
      <div class="meta">
        <div class="photo" style={{backgroundImage: `url(${picture})`}}></div>
        <ul class="details">
          <li class="author" key={'author'}>
            <img src={authorIcon} class="icon-details" alt=""/>
            {authors.map((elem, i) => {
              return <a href="#" key={i}>{elem}</a>;
            })}
          </li>
          <li class="date" key={'first_publish'}>
            <img src={calendarIcon} class="icon-details" alt=""/>
            {first_publish}
          </li>
          <li class="tags" key={'tags'}>
            <ul>
              <img src={tagIcon} class="icon-details" alt=""/>

              {categories.map((elem, i) => {
                return (
                  <li key={i}>
                    <a href="#">{elem}</a>
                  </li>
                );
              })}

              {tags.map((elem, i) => {
                return (
                  <li key={i}>
                    <a href="#">{elem}</a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div class="description">
        <h2>{title[language]}</h2>
        <p>{content[language]}</p>
        <p class="read-more">
          <a href="#">
            Lire l'article
            <img src={arrowIcon} class="arrow" alt=""/>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Article;
