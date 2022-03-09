import { useDispatch, useSelector } from "react-redux";
import { toggleBurgerBtn } from "../redux/burger/slice.js";

export default function Burger() {
    const dispatch = useDispatch();
    const burgerBtn = useSelector((state) => state.burgerBtn || null);

    return (
        <>
            {burgerBtn ? (
                <div
                    className="overlay-start-container"
                    onClick={() => dispatch(toggleBurgerBtn(false))}
                >
                    <div className="overlay-text">
                        <div>
                            <p>
                                Was ist KOP?
                                <br></br>
                                <br></br>
                                Ziel von KOP ist es, auf verschiedenen Ebenen
                                institutionellem Rassismus entgegenzutreten und
                                damit den rassistischen Normalzustand zu
                                durchbrechen. Konkret befassen sich die Gruppen
                                unter anderem mit der Polizeipraxis des Racial
                                Profiling -, der Dokumentation und Aufklärung
                                rassistischer Polizeiangriffe und -übergriffe
                                sowie der Begleitung der Opfer und die
                                Vermittlung zu Beratungsstellen. Unsere Ziele
                                sind: die Position der Betroffenen und der Opfer
                                stärken die Öffentlichkeit für das Thema
                                sensibilisieren die Systematik im Vorgehen von
                                Polizei und Justiz offenlegen die
                                Verantwortlichkeit der Polizei benennen, sie
                                konfrontieren und unter Druck setzen
                                <br></br>
                                <br></br>
                                <a href="https://kop-berlin.de/">KOP Website</a>
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
