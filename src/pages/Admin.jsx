import React, { useState } from 'react';
import { Container, Table, Card, Row } from 'react-bootstrap';
import { getItems, addItem, updateItem, deleteItem } from '../data/Products'; 
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import DynamicForm from '../components/molecules/DynamicForm';

function Admin() {

    const [products, setProducts] = useState(getItems());

    const [editingId, setEditingId] = useState(null);

    const initialForm = {
        nombre: '',
        categoria: '',
        descripcion: '',
        precio_esmeraldas: '',
        stock: '',
        imagen: ''
    };

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const formInputs = [
        {
        id: 'nombre',
        label: 'Nombre del producto',
        type: 'text',
        placeholder: 'Ej: Espada de Diamante',
        value: formData.nombre,
        onChange: (e) => handleChange('nombre', e.target.value)
        },
        {
        id: 'categoria',
        label: 'Categoría',
        type: 'text',
        placeholder: 'Ej: Armas, Consumibles, Herramientas',
        value: formData.categoria,
        onChange: (e) => handleChange('categoria', e.target.value)
        },
        {
        id: 'precio_esmeraldas',
        label: 'Precio (Esmeraldas)',
        type: 'number',
        placeholder: 'Ej: 15',
        value: formData.precio_esmeraldas,
        onChange: (e) => handleChange('precio_esmeraldas', e.target.value)
        },
        {
        id: 'stock',
        label: 'Stock disponible',
        type: 'number',
        placeholder: 'Ej: 10',
        value: formData.stock,
        onChange: (e) => handleChange('stock', e.target.value)
        },
        {
        id: 'imagen',
        label: 'URL de la imagen',
        type: 'text',
        placeholder: 'https://ejemplo.com/imagen.png',
        value: formData.imagen,
        onChange: (e) => handleChange('imagen', e.target.value)
        },
        {
        id: 'descripcion',
        label: 'Descripción',
        type: 'textarea',
        rows: 3,
        placeholder: 'Descripción detallada...',
        value: formData.descripcion,
        onChange: (e) => handleChange('descripcion', e.target.value)
        }
    ];

    // 1. Guardar (Crear o Editar)
    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        if (!formData.nombre || !formData.precio_esmeraldas) {
        alert('Por favor ingresa al menos el nombre y el precio.');
        return;
        }

        if (editingId !== null) {
        // Si estamos editando
        updateItem(editingId, formData);
        alert('Producto actualizado con éxito');
        } else {
        // Si estamos creando uno nuevo
        addItem(formData);
        alert('Producto creado con éxito');
        }

        // Refrescar lista y reiniciar formulario
        setProducts(getItems());
        handleCancel();
    };

    // 2. Cargar producto en el formulario para editar
    const handleEdit = (product) => {
        setEditingId(product.id);
        setFormData({
        nombre: product.nombre || '',
        categoria: product.categoria || '',
        descripcion: product.descripcion || '',
        precio_esmeraldas: product.precio_esmeraldas || '',
        stock: product.stock || '',
        imagen: product.imagen || ''
        });
    };

    // 3. Eliminar producto
    const handleDelete = (id) => {
        deleteItem(id);
        setProducts(getItems());
    };

    // 4. Cancelar edición / Limpiar formulario
    const handleCancel = () => {
        setEditingId(null);
        setFormData(initialForm);
    };

    return (
        <Container className="my-5">
        <Text variant="h2" className="mb-4">Panel de Administración</Text>

        <Row>
            <Card className="p-3 shadow-sm">
                <Card.Body>
                <Text variant="h4" className="mb-3">
                    {editingId !== null ? 'Editar Producto' : 'Nuevo Producto'}
                </Text>
                
                <DynamicForm inputs={formInputs} />

                <div className="mt-3 d-flex gap-2">
                    <Button variant={editingId !== null ? "warning" : "success"} onClick={handleSubmit}>
                    {editingId !== null ? 'Guardar Cambios' : 'Crear Producto'}
                    </Button>
                    
                    {editingId !== null && (
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    )}
                </div>
                </Card.Body>
            </Card>

            <Card className="p-3 shadow-sm">
                <Card.Body>
                <Text variant="h4" className="mb-3">Lista de Inventario</Text>
                
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.precio_esmeraldas} 
                            <Image 
                            src="https://minecraft.wiki/images/Emerald_JE3_BE3.png" 
                            alt="Esmeralda" 
                            width="25" 
                            height="25"/>
                        </td>

                        <td>{item.stock}</td>
                        <td>
                            <div className="d-flex gap-1">
                            <Button 
                                variant="outline-primary" 
                                size="sm" 
                                onClick={() => handleEdit(item)}
                            >
                                Editar
                            </Button>
                            <Button 
                                variant="outline-danger" 
                                size="sm" 
                                onClick={() => handleDelete(item.id)}
                            >
                                Eliminar
                            </Button>
                            </div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
        </Row>
        </Container>
);
}

export default Admin;