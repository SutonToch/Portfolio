import klickPic from "./../assets/portfolio_klick_700.png"
import cardPic from "./../assets/portfolio_card_700.png"
import trPic from "./../assets/portfolio_tr_700.png"
import portfolioPic from "./../assets/portfolio_hero_700.png"

export const projects_text_data = {
    "de": {
        "projects": [
            {
                title: "Klick - Cursor Browsergame",
                state: "Klick",
                imgPath: klickPic,
                stack: [
                    "TypeScript",
                    "SCSS",
                    "HTML"
                ],
                liveURL: "https://sutontoch.github.io/Klick/",
                github: "https://github.com/SutonToch/Klick",
                short: [
                    "Ein kurzes Browsergame, bei dem kleine Boxen erscheinen, die man anklicken muss, um Punkte zu bekommen. Das Ziel ist einfach: so viele Punkte wie möglich erhalten.", 
                    "Nachdem ich JavaScript gelernt hatte, wollte ich mein Wissen in die Praxis umsetzen. Als zusätzliche Herausforderung entschied ich mich, das erste Mal TypeScript zu verwenden. Ursprünglich wollte ich aus diesem Browsergame etwas mehr machen, aber ich habe beschlossen, dass es seinen Zweck erfüllt hat und ich meine Zeit besser woanders investieren sollte.", 
                    "Wer ein paar Minuten freie Zeit hat, sollte es mal ausprobieren 🙂. Es gibt ein paar Tricks, um die Punktzahl zu erhöhen. 100 Punkte sind bereits beachtlich, aber wer 500 Punkte schafft, ist wirklich gut."
                ],
                details: [
                    {
                        title: "Ziel und Sinn",
                        content: "'Klick' diente für mich als Übung meiner JavaScript-Fähigkeiten und eine Möglichkeit, TypeScript auszuprobieren. Außerdem wollte ich schon immer mal ein eigenes kleines Spiel programmieren, auch wenn es recht simpel ist. Hinzu kam, dass ich mir eine Zeitgrenze von einem Monat gegeben habe, um das Spiel zu designen, zu programmieren, zu testen und zu finalisieren."
                    },
                    {
                        title: "Gedankenprozess",
                        content: "Die erste Frage, die ich mir gestellt habe, war: 'Was könnte man mit dem Cursor machen, das Spaß macht?'. Grundlegend ist mit dem Cursor 'klicken' und 'bewegen' möglich, was man erneut in 'Linksklick (und halten)', 'Rechtsklick (und halten)', sowie Kombinationen mit 'bewegen' unterteilen kann. Damals habe ich mir das etablierte Game-Design von Nintendo in der Super Mario Serie zur Hand genommen: 1. Eine grundlegende Mechanik auswählen (z.B. einfach nur klicken) 2. Diese Mechanik einführen (z.B. etwas anklicken) 3. Die Mechanik expandieren und mit anderen kombinieren (z.B. auftauchende und verschwindende Boxen anklicken). Wenn man diese Art von Game Design auswählt, bietet sich Levelbasiertes Design am besten an, was auch zu 'Klick' passen würde. Dementsprechend wollte ich einen Prototyp erschaffen, um zu überprüfen, ob einfach nur auftauchende Boxen anklicken bereits Spaß machen kann. Und ich denke, dass ich damit erfolgreich war."
                    },
                    {
                        title: "Vision",
                        content: "'Klick' im jetzigen Zustand ist quasi nur ein Prototyp. Hätte ich mehr Zeit, würde ich es zu einem levelbasierten Browsergame weiterentwickeln, in dem die unterschiedlichen Facetten des Cursors erkundet werden. Hier ein paar Ideen, wie das aussehen könnte:",
                        list: [
                            "'bewegen' zentral machen, indem z.B. etwas ausgewichen werden muss. Dieses etwas könnte den Cursor z.B. auch verfolgen",
                            "die Cursorbewegung glätten, sodass es sich so anfühlt, als wäre der Cursor auf Eis",
                            "in gewissen Zeitabständen wird der Cursor unsichtbar, sodass man sich merken muss wo man war",
                            "alles ist dunkel und der Cursor agiert als eine Art Fackel",
                            "durch eine Art Labyrinth navigieren, während man die Ränder nicht berühren darf",
                            "eine Box anklicken und zu einem anderen Ort ziehen müssen",
                            "über einer Box für eine gewisse Zeit hovern",
                            "innerhalb eines gewissen Zeitrahmens eine bestimmte Anzahl Klicks durchführen",
                        ]
                    },
                    {
                        title: "Was ich gelernt habe",
                        content: "Viele meiner Herausforderungen bei diesem Projekt hatten etwas mit TypeScript zu tun, insbesondere die TypeScript-Konfiguration von 'module' und 'target' wo ich das erste Mal von dem Standard ECMA-Script gehört habe. Zu Beginn der Entwicklung habe ich auch getestet, ob es sinnvoll wäre, React für das Projekt zu nutzen. Nach einiger Frustration mit 'stale state' und dem 'useRef Hook' entschied ich mich, das Projekt ohne React anzugehen. Rückblickend halte ich das zum jetzigen Zeitpunkt nicht für die falsche Entscheidung. Es kann jedoch sein, dass ich meine Meinung ändern würde, wenn das Projekt größer werden würde. Alles in allem lässt sich aber festhalten: Manchmal braucht man keine schicken Frameworks, denn manchmal behindern sie einem mehr, als dass sie helfen."
                    },
                    {
                        title: "Tricks für höhere Punktzahlen",
                        content: "Es sollte klar sein, dass das Spiel einfacher wird, je weniger Abstand zwischen den auftauchenden Boxen ist. Wenn berechnet wird, wo eine Box auftaucht wird immer die Größe des Fensters mit in Betracht gezogen, also ein verkleinertes Fenster macht das Spiel leichter. Außerdem hat 'Klick' eine dynamisch skalierende Schwierigkeit, in der eine schnelle Reaktionszeit die Schwierigkeit schneller erhöht. Wenn man entsprechend eine Box erst dann klickt, kurz bevor sie verschwindet, kann die Schwierigkeit sogar, bis zu einem gewissen Punkt, verringert werden."
                    },
                ]
            },
            {
                title: "Frontend Mentor - Kreditkarten Details Formular",
                state: "Cards",
                imgPath: cardPic,
                stack: [
                    "React",
                    "Vite",
                    "npm",
                    "TypeScript",
                    "SCSS",
                    "HTML"
                ],
                liveURL: "https://sutontoch.github.io/interactive-card-details-form/",
                github: "https://github.com/SutonToch/interactive-card-details-form",
                short: [
                    "Ein 'Frontend Mentor'-Projekt, bei dem man eine Komponente zur Eingabe von Kreditkartendaten erstellt. Die Kreditkartendaten sollen dann dynamisch auf der Seite angezeigt werden.", 
                    "Durch dieses Projekt konnte ich mein Verständnis für Positionierung vertiefen, sodass ich es jemandem anderen ohne Probleme vermitteln könnte. Hier habe ich auch die regulären Ausdrücke aus meiner Studienzeit wiederholt.", 
                    "Wenn ich das Projekt ein zweites Mal machen würde, würde ich etwas anders an das Layout herangehen. Wenn Interesse besteht, unter 'Mehr anzeigen' gehe ich tiefer ins Detail."
                ],
                details: [
                    {
                        title: "Ziel und Sinn",
                        content: "Dies ist eins meiner neueren Projekte neben dem Portfolio. Nachdem ich mit der ersten Version meines Portfolios nicht zufrieden war, wollte ich erstmal ein anderes Projekt zur Ablenkung und Übung angehen. Ich habe diese Frontend-Mentor-Challenge gewählt, weil die Positionierung der Karten für mich interessant aussah und ich schon lange keine Formularvalidierung mehr gemacht hatte."
                    },
                    {
                        title: "Gedankenprozess",
                        content: "Ich habe mir hauptsächlich über die Positionierung der Karten Gedanken gemacht, weil ich wusste, dass ich die regulären Ausdrücke für die Formularvalidierung schaffen würde. Mein erster Gedanke für die Positionierung der Karten war einfach nur 'position: absolute;' mit '%' als Einheit. Den Rest würden dann ggf. Media Queries lösen können."
                    },
                    {
                        title: "Was ich anders machen würde",
                        content: "Wenn ich das Projekt ein zweites Mal machen würde, dann würde ich die Karten mittels 'display: grid' positionieren und den Hintergrund mittels 'position: absolute;'. Das sollte sehr viel mehr Kontrolle bieten und weniger Media Queries benötigen, wodurch diese Komponente wiederum leichter zu warten wäre.Außerdem würde ich den Labels 'display: inline-block;' geben, damit wirklich nur deren Text anklickbar ist."
                    },
                ]
            },
            {
                title: "Frontend Mentor - Taschenrechner",
                state: "Calculator",
                imgPath: trPic,
                stack: [
                    "JavaScript",
                    "CSS",
                    "HTML"
                ],
                liveURL: "https://sutontoch.github.io/calculator-app/",
                github: "https://github.com/SutonToch/calculator-app",
                short: [
                    "Eine Taschenrechner-Webanwendung. Dies ist das Projekt, bei dem ich meine JavaScript- und Grid-Layout-Fähigkeiten getestet habe.", 
                    "Ich habe ziemlich viel Arbeit in dieses Projekt gesteckt, mit ein paar zusätzlichen Funktionen, mit denen ich über das Ziel hinausgegangen bin. Zum Beispiel habe ich eine eigene und sichere eval-Funktion entwickelt, und man kann die Tastatur für Eingaben im Taschenrechner nutzen. Die eval-Funktion wurde ziemlich kompliziert, aber ich bin stolz darauf 💪.", 
                    "Ich bin mir bewusst, dass viele Portfolios einen Taschenrechner enthalten, aber ich denke, dass dieses Projekt etwas Besonderes ist, weil es zeigt, dass ich bereit und in der Lage bin, die Extrameile zu gehen. Trotzdem das Interesse geweckt? Hier sind die Links:"
                ],
                details: [
                    {
                        title: "Placeholder Title",
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!"
                    },
                ]
            },
            {
                title: "Portfolio",
                state: "Portfolio",
                imgPath: portfolioPic,
                stack: [
                    "React",
                    "Vite",
                    "npm",
                    "TypeScript",
                    "SCSS",
                    "HTML"
                ],
                liveURL: "",
                github: "https://github.com/SutonToch/Portfolio",
                short: [
                    "Hier geht es um das Projekt, das zu meinem aktuellen Portfolio geführt hat.", 
                    "Ich habe eine Menge Arbeit in dieses Projekt gesteckt, und es war eine lange Reise. Mitunter, weil ich kein Designer bin und entsprechend mit der ersten Version meines Portfolios nicht zufrieden war.",
                    "Mein Aufwand, Weg, Denkprozess und Erfahrungen bzgl. dieses Projektes sind erwähnenswert. Entsprechend, wenn Zeit und Lust besteht, unter folgendem Link lässt sich mehr finden."
                ],
                details: [
                    {
                        title: "Placeholder Title",
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!"
                    },
                ]
            }
        ],
        "title": "Meine Projekte",
        "btn_projects": "Mehr anzeigen",
        "btn_start": "Ausprobieren"
    },
    "en": {
        "projects": [
            {
                title: "Klick - Cursor Browser Game",
                state: "Klick",
                imgPath: klickPic,
                stack: [
                    "TypeScript",
                    "SCSS",
                    "HTML"
                ],
                liveURL: "https://sutontoch.github.io/Klick/",
                github: "https://github.com/SutonToch/Klick",
                short: [
                    "A short browser game in which small boxes appear that you have to click on to get points. The goal is simple: get as many points as possible.", 
                    "After learning JavaScript, I wanted to put my knowledge into practice. As an additional challenge, I decided to use TypeScript for the first time. Originally, I wanted to make something more out of this browser game, but I decided that it had served its purpose and I would be better off investing my time elsewhere.", 
                    "If you have a few minutes of free time, you should give it a try 🙂. There are a few tricks to increase your score. 100 points is already impressive, but anyone who manages 500 points probably mastered the game."
                ],
                details: [
                    {
                        title: "Goal and Purpose",
                        content: "For me, 'Klick' served as an exercise for my JavaScript skills and a way to try out TypeScript. I also always wanted to program my own little game, even if it is quite simple. In addition, I gave myself a time limit of one month to design, program, test and finalize the game."
                    },
                    {
                        title: "Thought Process",
                        content: "The first question I asked myself was: 'What could you do with the cursor that would be fun? Basically, you can 'click' and 'move' with the cursor, which can be further divided into 'left-click (and hold)', 'right-click (and hold)', and combinations with 'move'. Back then, I took the established game design from Nintendo in the Super Mario series: 1. select a basic mechanic (e.g. just click) 2. introduce this mechanic (e.g. click on something) 3. expand the mechanic and combine it with others (e.g. click on appearing and disappearing boxes). If you choose this kind of game design, level-based design is the best choice, which would also fit 'Klick'. Accordingly, I wanted to create a prototype to see if simply clicking on appearing boxes could be fun. And I'd like to think I was successful."
                    },
                    {
                        title: "Vision",
                        content: "'Klick' in its current state is more or less just a prototype. If I had more time, I would develop it into a level-based browser game in which the different facets of the cursor are explored. Here are a few ideas of what that might look like:",
                        list: [
                            "centralise 'move', e.g. by having to avoid something. This something could also follow the cursor",
                            "smooth the cursor movement so that it feels as if the cursor is on ice",
                            "at certain intervals the cursor becomes invisible, so you have to remember where you were",
                            "everything is dark and the cursor acts as a kind of torch",
                            "navigate through a kind of labyrinth while not touching the edges",
                            "click on a box and have to drag it to another location",
                            "hover over a box for a certain amount of time",
                            "perform a certain number of clicks within a certain time frame",
                        ]
                    },
                    {
                        title: "Lessons learned",
                        content: "Many of my challenges on this project had to do with TypeScript, especially the TypeScript configuration of 'module' and 'target' where I first heard about the standard ECMA script. At the beginning of the development, I also tested whether it would make sense to use React for the project. After some frustration with 'stale state' and the 'useRef hook', I decided to tackle the project without React. Looking back, I don't think this was the wrong decision at this point in time. However, I might change my mind if the project were to grow. All in all, however, it can be said that sometimes you don't need fancy frameworks, because sometimes they hinder you more than they help."
                    },
                    {
                        title: "Tricks for a better Highscore",
                        content: "It should be clear that the less space between the boxes that appear, the easier the game will be. When calculating where a box appears, the size of the window is always taken into account, so a smaller window makes the game easier. In addition, 'Klick' has a dynamically scaling difficulty, where a fast reaction time increases the difficulty faster. Accordingly, if you click a box just before it disappears, the difficulty can even be reduced, up to a certain point."
                    },
                ]
            },
            {
                title: "Frontend Mentor - Card Details Form",
                state: "Cards",
                imgPath: cardPic,
                stack: [
                    "React",
                    "Vite",
                    "npm",
                    "TypeScript",
                    "SCSS",
                    "HTML"
                ],
                liveURL: "https://sutontoch.github.io/interactive-card-details-form/",
                github: "https://github.com/SutonToch/interactive-card-details-form",
                short: [
                    "A 'Frontend Mentor' project in which you create a component for entering credit card details. These should then be displayed dynamically on the page.", 
                    "This project allowed me to deepen my understanding of positioning to such an extent, that I could easily teach it to someone else. Here I also revisited the regular expressions from my student days.", 
                    "If I were to do the project a second time, I would approach the layout slightly differently. If you are interested, I go into more detail under 'Show more'."
                ],
                details: [
                    {
                        title: "Ziel und Sinn",
                        content: "This is one of my newer projects besides the portfolio. After not being satisfied with the first version of my portfolio, I wanted to tackle another project for distraction and practice. I chose this frontend mentor challenge because the positioning of the cards looked interesting to me and I hadn't done any form validation in a long time."
                    },
                    {
                        title: "Gedankenprozess",
                        content: "I mainly thought about the positioning of the cards because I knew that I would easily manage the regular expressions for the form validation. My first thought for the positioning of the cards was simply 'position: absolute;' with '%' as the unit. Media queries would then be able to solve the rest."
                    },
                    {
                        title: "Was ich anders machen würde",
                        content: "If I were to do the project a second time, then I would position the cards using 'display: grid' and the background using 'position: absolute;'. This should provide much more control and require fewer media queries, which in turn would make this component easier to maintain. I would also give the labels 'display: inline-block;' so that only their text is really clickable."
                    },
                ]
            },
            {
                title: "Frontend Mentor - Calculator",
                state: "Calculator",
                imgPath: trPic,
                stack: [
                    "JavaScript",
                    "CSS",
                    "HTML"
                ],
                liveURL: "https://sutontoch.github.io/calculator-app/",
                github: "https://github.com/SutonToch/calculator-app",
                short: [
                    "A calculator web application. This is the project where I tested my JavaScript and grid layout skills.", 
                    "I put quite a bit of work into this project, with a few extra features with which I went above and beyond. For example, I developed a custom and secure eval-function, and you can use the keyboard for input in the calculator. The eval-function became quite complicated, but I am proud of it 💪.", 
                    "I am aware that many portfolios include a calculator, but I think this project is special because it shows that I am willing and able to go the extra mile. Still interested? Here are the links:"
                ],
                details: [
                    {
                        title: "Placeholder Title",
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!"
                    },
                ]
            },
            {
                title: "Portfolio",
                state: "Portfolio",
                imgPath: portfolioPic,
                stack: [
                    "React",
                    "Vite",
                    "npm",
                    "TypeScript",
                    "SCSS",
                    "HTML"
                ],
                liveURL: "",
                github: "https://github.com/SutonToch/Portfolio",
                short: [
                    "This is about the project that led to my current portfolio.", 
                    "I've put a lot of work into this project and it's been a long journey. Partly because I'm not a designer and therefore wasn't happy with the first version.", 
                    "My effort, journey, thought process and experiences regarding this project are worth mentioning. If you have the time, consider taking a look under the following link."
                ],
                details: [
                    {
                        title: "Placeholder Title",
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!"
                    },
                ]
            }
        ],
        "title": "My Projects",
        "btn_projects": "Show more",
        "btn_start": "Try out"
    }
}