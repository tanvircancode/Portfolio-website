import '../styles/PortfolioSection.css';

export default function Portfolio() {
  return (
    <div className="container">
      <div className="port-rightpart">
        <div className="rightpart-in">
          <div className="rightpart-p">
            <div className="rightpart-container">
              <div className="items-portfolio">
                <div className="title">Projects</div>
                <div className="list-wrapper">
                  <ul className="project-list">
                    <li>
                      <div className="inner">
                        <div className="project-desc">
                          By using plain PHP & javascript lots of data filtering
                          have been implemented. User authentication is used.
                          There are three panels of this project, User, Admin
                          and Super-Admin.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/University-Students-Management-using-PHP">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-2">
                        <div className="project-desc">
                          Its a React Js project named 'React Quiz System'. User
                          can sign up and login to attend the quiz system. After
                          submitting all the quiz total score is being shown and
                          right/wrong answers is also been showed.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/React-Quiz/tree/main/react-quiz">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-3">
                        <div className="project-desc">
                          It's a php project where you can create a task and
                          make them complete or incomplete depending on the work
                          done. Also you can delete them if necessary.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/Tasks-Manager-using-Plain-PHP">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-4">
                        <div className="project-desc">
                          There are two panels, admin and editor. Admin can
                          create,update and delete students and editor can only
                          create and update students. Authentication is used.
                          PHP 7.0, Js, HTML and CSS.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/PHP-Student-Management-System">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-5">
                        <div className="project-desc">
                          It's a raw php project. I tried to implement various
                          types of filtering. Implemented searching by words or
                          by alphabet. Also applied some javascript in filtering
                          & registration/login.Also put input SANITIZATION.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/Vocabulary-builder-project-using-PHP">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-6">
                        <div className="project-desc">
                          An admin can create,update and delete employees jobs
                          and also can create jobs.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/codeigniter-Employee-Management-System_project">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-7">
                        <div className="project-desc">
                          Travel Website using React Js. This project is done
                          through learning purpose.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/react-static-responsive-website">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-8">
                        <div className="project-desc">
                          It’s a simple Codeigniter project where an user can do
                          create,update and delete operations. No authentication
                          is used.
                        </div>
                        <div className="project-link">
                          <a href="https://github.com/tanvircancode/crud_using_codeigniter3">
                            Link
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
