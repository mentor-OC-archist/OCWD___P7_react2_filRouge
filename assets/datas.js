const jsonDatas = {
    P1C1_SC2: {
        h: "Exploitez les outils ESLint et Prettier"
        , p: `Pour ce qui est des erreurs de code, ou tout simplement de la mise en forme, vous le savez sûrement déjà, JavaScript est très souple : pas de compilation stricte qui vous signale vos erreurs. Heureusement, il existe des outils qui permettent d'écrire du code plus propre !`
        , liens: ["https://player.vimeo.com/video/561864358?color=7451eb", "https://player.vimeo.com/video/561864399?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C1-solution"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C1-solution"]
        , tasks: {
            p: `Dans notre cas, nous allons nous intéresser à ESLint, qui va vous signaler des erreurs dans le code (aussi bien des erreurs de style que des erreurs basiques de code qui peuvent conduire à des bugs), et Prettier, qui va le formater.`
            , ol: [
                `Créer un fichier .eslintrc`
                , `Créer un fichier .prettierrc`
            ]
        }
    },
    P1C1: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "____"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P1C2: {
        h: "Transformez votre application en Single Page Application avec React Router"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C2-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C2-solution"]
        , tasks: {
            p: `____`
            , ol: [
                `Créer une nouvelle page  Results  et l'ajouter au router.`
                , `Créer une nouvelle page  Freelances  , l'ajouter au router, et créer un lien dans le  Header  .`
                , `Dans  Survey.jsx  , coder un lien  précédent  et un lien  suivant  qui permettent respectivement de passer à la question précédente et à la question suivante. `
                , [`Si la question actuelle est à 1, le lien "précédent" n'est pas activé. `
                    , `Si la question est à 10, le lien "suivant" ne s'affiche pas. À la place, il y aura un lien "Résultats" qui redirigera vers la page "Results".`
                ]
            ]
        }
    },
    P1C2_SC2: {
        h: "Naviguez avec les Link"
        , p: `Profitons-en pour créer notre header, avec les liens vers les différentes pages de notre application.`
        , liens: ["https://player.vimeo.com/video/561864520?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C2-screencast2"
        , sol: ["____"]
        , tasks: {
            p: `Maintenant que nous avons vu comment mettre en place le routing, j'en profite pour vous montrer comment découper notre router quand nous avons beaucoup de routes à gérer – dans un projet de code plus important, par exemple. Alors suivez-moi dans le screencast ci-dessous !`
            , ol: [
                `.....`
                , `.....`
            ]
        }
    },
    P1C2_EX: {
        h: "Récupérez des paramètres dans vos URL"
        , p: `Mais comment faire si vous voulez passer des paramètres ? Par exemple, lorsqu'on va faire le questionnaire, et que le numéro de chaque question sera récupéré depuis l'URL ? `
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C2-exercice"
        , sol: ["____"]
        , tasks: {
            p: `Eh bien, bonne question ! Le router vous permet de récupérer des paramètres ; pour cela, il suffit d'écrire votre route comme ici dans le fichier  index.jsx  à la racine de  /src  :`
            , ol: [
                `<Route path="/survey/:questionNumber">
                    <Survey />
                </Route>`
                , `function Header() {
                    return (
                        <nav>
                            <Link to="/">Accueil</Link>
                            <Link to="/survey/42">Questionnaire</Link>
                        </nav>
                    )
                }`
                , `import { useParams } from 'react-router-dom'
 
                    function Survey() {
                        const { questionNumber } = useParams()
                    
                        return (
                            <div>
                                <h1>Questionnaire 🧮</h1>
                                <h2>Question {questionNumber}</h2>
                            </div>
                        )
                    }
                `
            ]
        }
    },
    P1C3: {
        h: "Indiquez les types de vos props avec les PropTypes"
        , p: `utiliser les PropTypes pour sécuriser votre application : `
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C3-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C3-solution"]
        , tasks: {
            p: `Pour cela`
            , ol: [
                `Ajouter  isRequired  à toutes les props de  Card  .`
                , `Préciser une prop par défaut pour  title  ,  label  et  picture  . `
                , `Les props par défaut de  title  et  label  sont une string vide. La prop par défaut de  picture  est  DefaultPicture  ,  que nous avons utilisée dans ce chapitre. Vous pouvez supprimer les props inutiles.`
                , `À l’avenir, vous devrez typer toutes les props de vos composants dans notre application.`
            ]
        }
    },
    P1C3_EX: {
        h: "Exigez une prop"
        , p: `Il est très simple de préciser qu'une prop est requise pour le bon fonctionnement de l'application. Pour cela, il suffit d'ajouter  isRequired  à la suite du type déclaré.`
        , liens: [""]
        , copypaste: ""
        , begin: "____"
        , sol: ["____"]
        , tasks: {
            p: `Par exemple, toujours pour  Card  , si on fait :`
            , ol: [
                `Card.propTypes = {
                    label: PropTypes.string,
                    title: PropTypes.string.isRequired,
                    picture: PropTypes.string
                }`
                , `et qu'on omet de déclarer la prop  title  , ça nous donne :`
                , `https://user.oc-static.com/upload/2021/06/04/16228080563879_image28.jpg`
            ]
        }
    },
    P1C4: {
        h: "Scopez votre CSS avec styled components"
        , p: `C'est maintenant le moment de vous exercer en autonomie sur la bibliothèque  styled-components  . `
        , liens: ["https://www.figma.com/file/KlrToaA7Dj1Sm0opq37ICg/OC---React-2?node-id=2%3A144", "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/assets"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C4-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C4-solution"]
        , tasks: {
            p: `Cette fois-ci, vous devrez vous appuyer sur la maquette Figma et créer le style pour : `
            , ol: [
                `le header (intégration du logo, position des liens) ;`
                , `la page d'accueil (intégration du texte, de l'illustration, du background, etc.) ;`
                , `la page Profils (texte au-dessus des Cards) ;`
                , `la page d'erreur.`
            ]
        }
    },
    P1C4_EX: {
        h: "Utilisez des variables, & , Créez un style global"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C4-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `On crée donc un dossier  /utils  directement dans  src/  , dans lequel on met un dossier  /style  . On y crée notre fichier  colors.js  , ce qui nous donne :`
                , `Dans  colors.js  , on définit nos couleurs :`
                , `const colors = {
                        primary: '#5843E4',
                        secondary: '#8186A0',
                        backgroundLight: '#F9F9FC',
                    }
                    
                    export default colors`
                , `Pour l'utiliser, il nous suffit de l'importer directement dans notre template string :`
                , `const StyledLink = styled(Link)\`
                    padding: 15px;
                    color: #8186a0;
                    text-decoration: none;
                    font-size: 18px;
                    ${(props) =>
                        props.$isFullLink &&
                        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
                \``
                , "..."
            ]
        }
    },
    P1C4_SC: {
        h: "Passez des props dans votre CSS"
        , p: `Quels autres avantages tire-t-on du fait d'écrire notre style avec du JS ?`
        , liens: ["https://player.vimeo.com/video/561864577?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P1C4-screencast"
        , sol: ["____"]
        , tasks: {
            p: `... Eh bien justement, on utilise du JS. 😎 Voyons voir concrètement ce que cela donne dans notre  Header  .`
            , ol: [
                `<StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>`
                , `Ici on passe la prop $isFullLink  . Ce qui nous permet d'utiliser la prop directement dans le style :`
                , `const StyledLink = styled(Link)\`
                    padding: 15px;
                    color: #8186a0;
                    text-decoration: none;
                    font-size: 18px;
                    ${(props) =>
                        props.$isFullLink &&
                        `color: white; border-radius: 30px; background-color: #5843E4;`}
                \``
                , `C'est quoi ce  $  ?`
                , `Eh bien, cela permet de signaler à  styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM.`
            ]
        }
    },
    P2C1: {
        h: "Exploitez vos connaissances de useState et useEffect pour effectuer des calls API"
        , p: `Vous avez réussi à récupérer les données depuis le backend de l’agence Shiny : félicitations à vous ! À vous de jouer pour faire la même chose pour la page des profils freelances. `
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C1-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C1-solution"]
        , tasks: {
            p: `Pour cela, vous allez devoir :`
            , ol: [
                `Récupérer les profils des freelances sur l’endpoint /freelances  de l’API. Vous pouvez utiliser la syntaxe async  / await  ou les .then  .`
                , `Utiliser le Loader  lorsque le contenu des profils freelances est en train de charger.`
                , `Afficher les données dans la page.`
                , `Afficher une erreur s'il y a eu un problème.`
            ]
        }
    },
    P2C1_EX: {
        h: "Récupérez les données d'une API"
        , p: `Pour nous atteler à l'utilisation de l'API, nous allons développer la page /survey  . Souvenez-vous, dans le chapitre précédent, nous avions créé des liens pour naviguer entre les questions, et rediriger l'utilisateur sur /results  quand il atteignait la dixième question. Eh bien, ici, nous allons continuer à développer cette page afin de récupérer les données depuis l'API.`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/blob/P2C1-exercice/src/index.jsx"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                ` on pourra récupérer les données en faisantfetch('http://localhost:8000/survey')`
                , `Ici, on a donc uniquement besoin d’appeler l’API à la première initialisation de notre composant, et on précise un tableau de dépendances vide dans notre fichier  :`
                , "..."
            ]
        }
    },
    P2C1_SC: {
        h: "Créez un state loading"
        , p: `Une pratique très répandue consiste à mettre un petit loader pour signifier que les données vont bientôt s’afficher. On pourrait mettre un simple texte “Chargement...”, mais bon, on sait manier le CSS : autant s’amuser avec, non ?`
        , liens: ["https://player.vimeo.com/video/561864633?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/blob/P2C1-screencast/src/index.jsx"
        , sol: ["____"]
        , tasks: {
            p: `Je vous propose de créer un simple Loader  en CSS, directement dans le fichier utils/Atoms.jsx`
            , ol: [
                `Pour cela, on a également besoin d’importer keyframes  depuis la bibliothèque styled-components  . `
                , `On va maintenant utiliser le state pour afficher notre Loader  . Pour cela, on crée une variable isDataLoading  avec useState  :`
                , `const [isDataLoading, setDataLoading] = useState(false)`
                , `Dans le useEffect  , on vient modifier notre booléen :`
                , `useEffect(() => {
                        setDataLoading(true)
                        fetch('http://localhost:8000/survey')
                        .then((response) => response.json())
                        .then(({ surveyData }) => {
                        setSurveyData(surveyData)
                        setDataLoading(false)
                        })
                    }, [])`
                    , `... ce qui nous permet ainsi de conditionner le rendu de notre composant : le Loader  s’affiche tant que les données chargent, et une fois qu’on les a bien, le contenu de la question s’affiche à la place du Loader  .`
                    , `Maintenant que nous avons le comportement que nous souhaitons, profitons-en pour implémenter une syntaxe un peu plus moderne, et pour gérer les erreurs :`
            ]
        }
    },
    P2C2: {
        h: "Partagez vos données avec le Contexte et useContext"
        , p: `Pour cet exercice, vous devez utiliser le Contexte pour récupérer les résultats du questionnaire entre les pages.`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C2-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C2-solution"]
        , tasks: {
            p: [`Dans context/index.jsx  , vous trouverez un SurveyProvider  prêt à être utilisé.`
                , `Dans  /Survey/index.jsx  , vous trouverez la base de code pour stocker les réponses de l'utilisateur dans le Contexte, ainsi que des boutons permettant de répondre.`
                , ` Pour cet exercice, vous allez devoir :`
            ]
            , ol: [
                `Utiliser useTheme  dans votre Footer/index.jsx  .`
                , `Utiliser votre SurveyProvider dans src/index.jsx  .`
                , `Sauvegarder les résultats dans votre state depuis pages/Survey/index.jsx  .`
                , `Récupérer les résultats dans /pages/results.jsx  avec useContext  , et les afficher dans un simple console.log()`
            ]
        }
    },
    P2C2_EX: {
        h: "Découvrez le Contexte dans React"
        , p: `????`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C2-exercice"
        , sol: ["____"]
        , tasks: {
            p: `????`
            , ol: [
                `????`
            ]
        }
    },
    P2CSC: {
        h: "Tirez profit du Contexte et de useContext"
        , p: `La documentation de React dit que "le Contexte est conçu pour partager des données qui peuvent être considérées comme globales", et cite en exemple des données sur l’utilisateur actuellement authentifié, le thème, la langue utilisée, etc.`
        , liens: ["https://player.vimeo.com/video/561864470?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C2-screencast"
        , sol: ["____"]
        , tasks: {
            p: `Nous allons commencer en douceur avec le contexte pour créer un Dark Mode (mode nuit) pour notre application. Vous savez, ce thème de couleurs plutôt sombres qui permet de reposer ses yeux devant l’écran.`
            , ol: [
                `...`
                , `Comme je vous le disais, vous êtes un chanceux : avant les hooks, le Contexte était plus compliqué à mettre en œuvre. Je vous fais une démonstration juste en dessous de comment ça se passait. 👇`
            ]
        }
    },
    P2C3: {
        h: "Allez plus loin avec les hooks"
        , p: `Maintenant que nous avons créé un hook personnalisé pour faire des calls API useFetch  , vous allez pouvoir l’utiliser pour les pages /Freelances  ainsi que /Results  .`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C3-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C3-solution"]
        , tasks: {
            p: `ous allez également devoir créer un hook personnalisé useTheme  qui récupère le Contexte du theme  et vous permet de récupérer le thème actuel (  dark  ou light  ).`
            , ol: [
                `À partir de là, vous pouvez intégrer les changements de style pour le thème, et intégrer la page /results  en fonction des maquettes si vous voulez vous challenger`
            ]
        }
    },
    P2C3_EX: {
        h: "Créez un hook pour vos calls API, & , Ajoutez une gestion d’erreur"
        , p: `____`
        , liens: ["https://fr.reactjs.org/docs/hooks-reference.html"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C3-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P2C3_SC: {
        h: "Créez vos propres hooks pour simplifier votre code"
        , p: `Nous allons en profiter pour utiliser useFetch  pour envoyer les réponses de l'utilisateur, et donc récupérer les résultats de notre API depuis la page /results  .`
        , liens: ["https://player.vimeo.com/video/561864685?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P2C3-screencast"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P3C1: {
        h: "Découvrez la base des tests dans React avec Jest"
        , p: `Peu importe le langage dans lequel vous développez, les tests font partie intégrante du métier de développeur, même en frontend. Ils permettent de s'assurer de la fiabilité de votre code.`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C1-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C1-solution"]
        , tasks: {
            p: `Pour cet exercice, vous continuerez à tester pages/results/index.jsx  avec la fonction formatQueryParams  .`
            , ol: [
                `Vous devrez créer deux tests différents pour formatQueryParams  au sein d'une série de tests (regroupés dans describe()  ).`
            ]
        }
    },
    P3C1_EX: {
        h: "Créez votre premier test avec Jest........."
        , p: `Comme tout ce qui a trait à JavaScript, l'écosystème des tests évolue très vite. Dans cette partie, nous allons utiliser Jest et React Testing Library.`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C1-exercice"
        , sol: ["____"]
        , tasks: {
            p: `Maintenant, écrivons un test unitaire.`
            , ol: [
                `Préparez votre code`
                , `Créez votre fichier de test`
                , `Comprenez la rédaction du test`
            ]
        }
    },
    P3C1_SC: {
        h: "Créez votre premier test avec Jest"
        , p: `____`
        , liens: ["https://player.vimeo.com/video/561864765?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C1-screencast"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P3C2: {
        h: "Testez vos composants avec React Testing Library"
        , p: `J'ai également ajouté une fonctionnalité qui permet de sélectionner un profil en cliquant dessus pour le mettre en "favori" : cela permet d'ajouter des emojis  ⭐️   autour de son nom.`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C2-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C2-solution"]
        , tasks: {
            p: `Ici, vous devrez :`
            , ol: [
                `Créer un fichier de test pour Card  . `
                , `Vérifier que Card utilise bien la picture  que vous lui passez en props.`
                , `Tester que lorsque vous lui passez une props title  , elle s'affiche bien.`
                , `Vérifier que le titre change bien lorsqu'un profil est sélectionné dans les favoris (pour cela, vous pouvez utiliser la méthode closest  (dont je vous mets le lien de la documentation ici), qui vous permettra d'accéder à la div  parente la plus proche).`
            ]
        }
    },
    P3C2_EX: {
        h: "?.?????"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C2-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P3C2_SC: {
        h: "Testez les événements de vos composants"
        , p: `____`
        , liens: ["https://player.vimeo.com/video/561864803?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C2-screencast"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `Interagissez avec un élément`
                `____`
            ]
        }
    },
    P3C3: {
        h: "Allez plus loin dans vos tests"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C3-begin"
        , sol: ["https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C3-solution"]
        , tasks: {
            p: `Vous allez devoir créer les tests pour Results/index.jsx  . Il vous faudra également mocker les données comme vous l'avez vu dans ce chapitre`
            , ol: [
                `____`
            ]
        }
    },
    P3C3_EX: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C3-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P3C3_SC: {
        h: "Découvrez d'autres types de tests"
        , p: `Vous avez appris à créer des tests unitaires avec Jest et à tester vos composants avec React Testing Library. Vous avez testé vos interactions et pu simuler des appels API. Mais vous vous en doutez peut-être : le sujet des tests est très vaste. Il existe de nombreux outils et de nombreuses approches.`
        , liens: ["https://player.vimeo.com/video/561864899?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C3-screencast"
        , sol: ["____"]
        , tasks: {
            p: `Dans le screencast ci-dessous, je vous fais la démo d'une autre approche que nous n'avons pas vue ensemble. 👇`
            , ol: [
                `____`
            ]
        }
    },
    P3C3_SC2: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "____"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P3C4_EX: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P3C4-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P4C1: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "____"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P4C1_EX: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P4C1-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P4C1_SC: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P4C1-screencast"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P4C2: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "____"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P4C2_EX: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P4C2-exercice"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
    P4C2_SC: {
        h: "____"
        , p: `____`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/tree/P4C2-screencast"
        , sol: ["____"]
        , tasks: {
            p: `____`
            , ol: [
                `____`
            ]
        }
    },
}