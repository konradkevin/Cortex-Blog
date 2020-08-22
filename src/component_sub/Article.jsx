import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../css/Article.css";
import { Image } from "react-bootstrap";
import LangContext from "../contexts/LangContext";
import authorIcon from "../media/icons/author.png";
import tagIcon from "../media/icons/tag.png";
import calendarIcon from "../media/icons/calendar.png";
import arrowIcon from "../media/icons/arrow_right.png";
import backend from "../firebase";
// Styles
// import { Button } from 'react-bootstrap';

function Article(props) {
  const { language, setLanguage } = React.useContext(LangContext);

  // FONCTIONS LANGUES
  const assignLang = () => {
    switch (language) {
      case "fr":
        return {
          article: props.datas.content
        };
        break;
      case "en":
        return {
          article: "Biology"
        };
        break;
      case "es":
        return {
          article: "Biología"
        };
        break;
      default:
        break;
    }
  };

  if (props.direction == "left") {
    return (
      <div class="blog-card">
        <div class="meta">
          <div
            class="photo"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
            }}
          ></div>
          <ul class="details">
            <li class="author">
              <img src={authorIcon} class="icon-details" alt="" />
              {props.datas.authors.map((elem, i) => {
                return <a href="#">{elem}</a>;
              })}
            </li>
            <li class="date">
              <img src={calendarIcon} class="icon-details" alt="" />
              {props.datas.first_publish}
            </li>
            <li class="tags">
              <ul>
                <img src={tagIcon} class="icon-details" alt="" />

                {props.datas.categories.map((elem, i) => {
                  return (
                    <li>
                      <a href="#">{elem}</a>
                    </li>
                  );
                })}
                {props.datas.tags.map((elem, i) => {
                  return (
                    <li>
                      <a href="#">elem</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
          <h2>{props.datas.title}</h2>
          <p>{assignLang().article}</p>
          <p class="read-more">
            <a href="#">
              Lire l'article
              <img src={arrowIcon} class="arrow" alt="" />
            </a>
          </p>
        </div>
      </div>
    );
  } else
    return (
      <div className="col-12 p-0 ">
        <div class="blog-card alt">
          <div class="meta">
            <div
              class="photo"
              style={{
                backgroundImage:
                  "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
              }}
            ></div>
            <ul class="details">
              <li class="author">
                <img src={authorIcon} class="icon-details" alt="" />
                <a href="#">Jane Doe</a>
              </li>
              <li class="date">
                <img src={calendarIcon} class="icon-details" alt="" />
                July. 15, 2015
              </li>
              <li class="tags">
                <ul>
                  <img src={tagIcon} class="icon-details" alt="" />
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">Code</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="description">
            <h2>
              Les criquets pèlerins, un fort marqueur des conséquences de
              l’activité humaine et du réchauffement climatique
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p class="read-more">
              <a href="#">
                Read More
                <img src={arrowIcon} class="arrow" alt="" />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Article;
