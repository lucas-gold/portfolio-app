import React from "react";

export function ExperienceCard({ item }) {
  return (
    <article className="expCard">
      <div className="expCardTop">
        <div>
          <h3 className="expCompany">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.company}
              </a>
            ) : (
              item.company
            )}
          </h3>
          <div className="expRole">{item.role}</div>
        </div>

        <div className="expDates">{item.dates}</div>
      </div>

      <ul className="expBullets">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {!!item.tags?.length && (
        <div className="expTags">
          {item.tags.map((t) => (
            <span className="expTag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
