const Skeleton = ({ item }) => {
    // generate skeleton for each image
    return [...Array(item).keys()].map((index) => (
        <div className="animate-pulse" key={index}>
            <div className="bg-orange-lt rounded-lg h-72"></div>
        </div>
    ));
}

export default Skeleton;