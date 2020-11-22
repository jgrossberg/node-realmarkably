class Generator {

    constructor(bedrooms, bathrooms, sqft) {
        this.copy = ''
        console.log(bedrooms, bathrooms, sqft);
        this.copy = `You'll enjoy this beautiful ${bedrooms} bedroom, ${bathrooms} bathroom house`;
    }

    getCopy() {
        return this.copy;
    }

}

module.exports = {
    Generator: Generator
}