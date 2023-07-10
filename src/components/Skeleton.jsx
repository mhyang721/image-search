const Skeleton = ({ item }) => {
    // generate skeleton for each image
    return [...Array(item).keys()].map(() => (
        <div className="animate-pulse">
            <div className="bg-violet rounded-lg h-72"></div>
        </div>
    ))
}

export default Skeleton;