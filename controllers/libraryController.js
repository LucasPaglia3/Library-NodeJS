const getLibraryController = (req, res) => {
    res.json({ message: 'Get all libraries'});
};

module.exports = { getLibraryController };