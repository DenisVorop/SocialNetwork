import Preloader from "../../common/Preloader/Preloader";

const users = [
    { id: '1', name: 'Денис' },
    { id: '2', name: 'Даша' },
    { id: '3', name: 'Александр' },
    { id: '4', name: 'Юрий' },
]

const News = () => {
    return (
        <div className="body__news news-body">
            <Preloader />
        </div>
    );
}

export default News;
