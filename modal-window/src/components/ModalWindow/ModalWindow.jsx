import style from './ModalWindow.module.css'

export const ModalWindow = ({ children }) => {
  return (
    <div>
      <div className={style.backLayer}>
        <div className={style.modalWindow}>
          <div className={style.header}>
            <h2 className={style.headerText}>Any text</h2>
            <div className={style.closeButton}>x</div>
          </div>
          <div className={style.content}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores sapiente,
              vero reprehenderit nulla voluptate minima, exercitationem voluptatem velit aut tempore
              ipsum veritatis cupiditate ducimus nobis repudiandae dolorem, reiciendis aspernatur?
            </p>
            <button className={style.okButton}>Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}
