import React from 'react';
import '../styles/Quizz.css';

function Quizz() {
    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            <form action="#" method="post">
                {/* Question 1 */}
                <p className="question">Question 1: Quelle est la maison à laquelle Harry Potter appartient à Poudlard ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q1" value="a" /> Serdaigle
                        </label>
                    </li>
                    <li>
                        <label>             
                            <input type="radio" name="q1" value="b" /> Serpentard
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q1" value="c" /> Poufsouffle
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q1" value="d" /> Gryffondor
                        </label>
                    </li>
                </ul>

                {/* Question 2 */}
                <p className="question">Question 2: Quel animal de compagnie magique Ron Weasley possède-t-il ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q2" value="a" /> Hibou
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q2" value="b" /> Chat
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q2" value="c" /> Rat
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q2" value="d" /> Chien
                        </label>
                    </li>
                </ul>

                {/* Question 3 */}
                <p className="question">Question 3: Quel est le nom de la prison magique située sur une île inhospitalière pour les sorciers condamnés ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q3" value="a" /> Nurmengard
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q3" value="b" /> Azkaban
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q3" value="c" /> Gringotts
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q3" value="d" /> Mangemort
                        </label>
                    </li>
                </ul>

                {/* Question 4 */}
                <p className="question">Question 4: Quel personnage principal de la saga "Star Wars" devient Dark Vador dans cet épisode ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q4" value="a" /> Obi-Wan Kenobi
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q4" value="b" /> Luke Skywalker
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q4" value="c" /> Anakin Skywalker
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q4" value="d" /> Yoda
                        </label>
                    </li>
                </ul>

                {/* Question 5 */}
                <p className="question">Question 5: Qui est le Jedi qui combat Anakin Skywalker dans un duel épique sur la planète Mustafar ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q5" value="a" /> Obi-Wan Kenobi
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q5" value="b" /> Count Dooku
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q5" value="c" /> Mace Windu
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q5" value="d" /> Qui-Gon Jinn
                        </label>
                    </li>
                </ul>

                {/* Question 6 */}
                <p className="question">Question 6: Quel est l'ordre donné par l'Empereur Palpatine (Dark Sidious) qui conduit à l'extermination des Jedi, et comment est-il appelé ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q6" value="a" /> L'Ordre 88
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q6" value="b" /> L'Ordre 66
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q6" value="c" /> L'Ordre 77
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q6" value="d" /> L'Ordre 22
                        </label>
                    </li>
                </ul>

                {/* Question 7 */}
                <p className="question">Question 7: Dans "John Wick 3: Parabellum", quel est le surnom russe souvent attribué à John Wick en référence à son métier ?</p>
                <ul className="answers">
                    <li>
                        <label>
                            <input type="radio" name="q7" value="a" /> Baba Yaga
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q7" value="b" /> Baya Gaba
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q7" value="c" /> Yaga Baba
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="q7" value="d" /> Baga Yaga
                        </label>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Quizz;
