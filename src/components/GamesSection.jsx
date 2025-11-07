
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import getProjects from "./ProjectsData";
import "./GameSection.css";


function GamesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const openModal = (project) => {
    let sortedMedia = project.media
      ? [...project.media].sort((a, b) =>
          a.type === "video" ? -1 : b.type === "video" ? 1 : 0
        )
      : undefined;
    setSelectedProject(
      sortedMedia ? { ...project, media: sortedMedia } : project
    );
    let firstVideoIdx = sortedMedia
      ? sortedMedia.findIndex((m) => m.type === "video")
      : -1;
    setCarouselIndex(firstVideoIdx !== -1 ? firstVideoIdx : 0);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCarouselIndex(0);
    setShowModal(false);
  };

  const mainMediaRef = useRef(null);
  const handleMainMediaClick = () => {
    const el = mainMediaRef.current;
    if (
      selectedProject &&
      selectedProject.media &&
      selectedProject.media[carouselIndex].type === "image"
    ) {
      if (
        document.fullscreenElement === el ||
        document.webkitFullscreenElement === el ||
        document.msFullscreenElement === el
      ) {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // Enter fullscreen
        if (el && el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el && el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el && el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      }
    }
  };

  // Reveal title and cards when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setTitleVisible(true);
        setTimeout(() => setCardsVisible(true), 200);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use getProjects(t) to get localized project data
  const projects = getProjects(t);

  return (
    <section ref={sectionRef} className="project-section" id="games">
      <h2
        ref={titleRef}
        className={`section-title${titleVisible ? " animate-title" : ""}`}
      >
        {t('gamesSection.title')}
      </h2>
      <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card${cardsVisible ? " animate-card" : ""}`}
              onClick={() => openModal(project)}
              style={{ cursor: "pointer", transitionDelay: `${index * 100}ms` }}
            >
              <img src={project.image} alt={project.title} />
              <div className="card-overlay">
                <div className="card-title">{project.title}</div>
                <div className="card-desc">{project.description}</div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className={`modal-overlay${showModal ? " show-modal" : ""}`}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <p>X</p>
            </button>
            {/* Media carousel only if at least one valid video exists, else show all images */}
            {selectedProject.media && selectedProject.media.length > 0 ? (
              selectedProject.media.some((m) => m.type === "video") ? (
                <div className="carousel-container">
                  <div className="carousel-media">
                    {selectedProject.media[carouselIndex].type === "image" ? (
                      <img
                        ref={mainMediaRef}
                        src={selectedProject.media[carouselIndex].src}
                        alt={selectedProject.title}
                        className="modal-image"
                        style={{ cursor: "zoom-in" }}
                        onClick={handleMainMediaClick}
                      />
                    ) : (
                      <video
                        ref={mainMediaRef}
                        src={selectedProject.media[carouselIndex].src}
                        controls
                        className="modal-video"
                        autoPlay
                        style={{ cursor: "zoom-in" }}
                        onClick={handleMainMediaClick}
                      />
                    )}
                  </div>
                  <div className="carousel-thumbnails">
                    {selectedProject.media.map((media, idx) => (
                      <div
                        key={idx}
                        className={`carousel-thumb${
                          carouselIndex === idx ? " active" : ""
                        }`}
                        onClick={() => setCarouselIndex(idx)}
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.src}
                            alt={selectedProject.title + " thumbnail"}
                          />
                        ) : (
                          <div className="video-thumb">
                            <video src={media.src} />
                            <span className="video-icon">▶</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="carousel-container">
                  <div className="carousel-media">
                    {selectedProject.media[carouselIndex].type === "image" ? (
                      <img
                        ref={mainMediaRef}
                        src={selectedProject.media[carouselIndex].src}
                        alt={selectedProject.title}
                        className="modal-image"
                        style={{ cursor: "zoom-in" }}
                        onClick={handleMainMediaClick}
                      />
                    ) : null}
                  </div>
                  <div className="carousel-thumbnails">
                    {selectedProject.media.map((media, idx) => (
                      <div
                        key={idx}
                        className={`carousel-thumb${
                          carouselIndex === idx ? " active" : ""
                        }`}
                        onClick={() => setCarouselIndex(idx)}
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.src}
                            alt={selectedProject.title + " thumbnail"}
                          />
                        ) : (
                          <div className="video-thumb">
                            <video src={media.src} />
                            <span className="video-icon">▶</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <div className="modal-image-container">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
            )}
            <div className="modal-info">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p
                className="modal-description"
                dangerouslySetInnerHTML={{
                  __html: selectedProject.expanded_description,
                }}
              ></p>
              <div className="modal-footer">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  {t('gamesSection.viewOnItch')}
                </a>
                <div className="modal-meta">
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GamesSection;
