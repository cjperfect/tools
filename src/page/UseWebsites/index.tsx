import React from "react";
import { websiteObj } from "./websiteConfig";
import "./index.less";

interface IProps {
  [extra: string]: any;
}

const WebSite: React.FC<IProps> = props => {
  return (
    <div className="website-container">
      {Object.keys(websiteObj).map(k => {
        return (
          <div key={k}>
            <h3>{k}</h3>
            <div className="container">
              {websiteObj[k].map(({ url, title, icon }) => {
                return (
                  <div className="item" key={url}>
                    <span className="title">{title}</span>
                    <img src={icon} alt="" />
                    <a href={url} title={title} target="_blank" rel="noreferrer" className="url">
                      {url}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WebSite;
