class FurnitureController {
    constructor(Furniture) {
        this.Furniture = Furniture;
    }

    async createFurniture(req, res) {
        try {
            const furniture = new this.Furniture(req.body);
            await furniture.save();
            res.status(201).json(furniture);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllFurniture(req, res) {
        try {
            const furnitureItems = await this.Furniture.find();
            res.status(200).json(furnitureItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getFurnitureById(req, res) {
        try {
            const furniture = await this.Furniture.findById(req.params.id);
            if (!furniture) {
                return res.status(404).json({ message: 'Furniture not found' });
            }
            res.status(200).json(furniture);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateFurniture(req, res) {
        try {
            const furniture = await this.Furniture.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!furniture) {
                return res.status(404).json({ message: 'Furniture not found' });
            }
            res.status(200).json(furniture);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteFurniture(req, res) {
        try {
            const furniture = await this.Furniture.findByIdAndDelete(req.params.id);
            if (!furniture) {
                return res.status(404).json({ message: 'Furniture not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default FurnitureController;