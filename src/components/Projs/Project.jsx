import * as React from "react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./projectstyle.css";

const collapse = {
  open: { height: "auto", opacity: 1 },
  collapsed: { height: 0, opacity: 0 },
};

export const Project = ({ data }) => {
  const [open, setOpen] = useState(false);

  const hasMedia = useMemo(() => Array.isArray(data.media) && data.media.length > 0, [data.media]);

  const toggle = () => setOpen((v) => !v);

  // Prevent link clicks from toggling the card.
  const stop = (e) => e.stopPropagation();

  return (
    <motion.li className="projCard" layout onClick={toggle}>
      <div className="projHeader">
        <div className="projTitleBlock">
          <div className="projNameRow">
            <h3 className="projName">{data.name}</h3>
          </div>

          <div className="projTags">
            {(data.tags || []).map((t) => (
              <span className="projTag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="projActions">
          {data?.links?.github ? (
            <a
              className="projIconLink"
              href={data.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
              aria-label="GitHub link"
              title="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          ) : null}

          {data?.links?.live ? (
            <a
              className="projIconLink"
              href={data.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
              aria-label="Live site link"
              title="Live"
            >
              <i className="fab fa-chrome" />
            </a>
          ) : null}

          <div
            className="projToggle"
            role="button"
            aria-label={open ? "Collapse project" : "Expand project"}
            aria-expanded={open}
            title={open ? "Collapse" : "Expand"}
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <motion.i
              className="fas fa-chevron-down"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.18 }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            className="projBody"
            variants={collapse}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            layout
          >
            {data.description ? <p className="projDesc" dangerouslySetInnerHTML={{ __html: data.description }}></p> : null}
                        
            {hasMedia ? (
              <div className="projCarouselWrap" onClick={stop}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={14}
                  slidesPerView={1}
                  style={{color: 'white'}}
                >
                  {data.media.map((m, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="projSlideMedia">
                        {m.type === "video" ? (
                          <video controls preload="metadata" playsInline>
                            <source src={m.src} type={m.mime || "video/webm"} />
                          </video>
                        ) : (
                          <img src={m.src} alt={m.alt || ""} loading="lazy" />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
