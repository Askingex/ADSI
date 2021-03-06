import Compra from '../models/compra.js'

const compraGet = async (req, res) => {
    const { value } = req.query;
    const compra = await Compra
        .find()
        .populate('usuario','nombre')
        .populate('persona','nombre')
        .sort({ "createAt": -1 })

    res.json({
        compra
    })
}

const compraGetById = async (req, res) => {
    const { id } = req.params;
    const compra = await Compra.findOne({ _id: id })

    res.json({
        compra
    })
}

const compraPost = async (req, res) => {
    const { usuario, persona, tipocomprobante, seriecomprobante, numcomprobante, impuesto, total, detalles } = req.body;

    const compra = new Compra({ usuario, persona, tipocomprobante, seriecomprobante, numcomprobante, impuesto, total, detalles })

    await compra.save();

    res.json({
        compra
    })


}

const compraPut = async (req, res) => {
    const { id } = req.params;
    const { _id, createAt, estado, _v, ...resto } = req.body;
    const compra = await Compra.findByIdAndUpdate(id, resto)
    res.json({
        compra
    })
}

const compraPutActivar = async (req, res) => {
    const { id } = req.params;
    const compra = await Compra.findByIdAndUpdate(id, { estado: 1 })
    res.json({
        compra
    })
}

const compraPutDesactivar = async (req, res) => {
    const { id } = req.params;
    const compra = await Compra.findByIdAndUpdate(id, { estado: 0 })
    res.json({
        compra
    })
}

const compraDelete = async (req, res) => {
    const { id } = req.params;
    const compra = await Compra.findByIdAndDelete(id)
    res.json({
        compra
    })
}

export { compraGet, compraGetById, compraPost, compraPut, compraPutActivar, compraPutDesactivar, compraDelete }

