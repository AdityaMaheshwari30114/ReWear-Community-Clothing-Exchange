// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./handymanProfile.css";
// import DashboardNavbar from "./DashboardNavbar";
// import img from './imgs/icon_1.jpg'


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./handymanProfile.css";
import DashboardNavbar from "./DashboardNavbar";

function HandymanProfile() {
    const location = useLocation();
    const handyman_id = new URLSearchParams(location.search).get("handyman_id");

    const [handymanData, setHandymanData] = useState("");

    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newItem, setNewItem] = useState({
        image: null,
        title: '',
        description: '',
        fabric: '',
        color: '',
        size: '',
        brand: '',
        condition: ''
    });

    useEffect(() => {
        const fetchHandyman = async () => {
            const response = await fetch(`http://localhost:5000/api/handyman/gethandyman`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ handyman_id }),
            });
            try {
                const data = await response.json();
                if (response.status === 200) {
                    setHandymanData(data);
                } else {
                    console.error(`Failed with status code ${response.status}`);
                }
            } catch (error) {
                console.error("Invalid JSON string:", error.message);
            }
        };
        fetchHandyman();
    }, [handyman_id]);

    useEffect(() => {
        const storedItems = localStorage.getItem(`clothingItems_${handyman_id}`);
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, [handyman_id]);

    const handleAddItem = () => {
        if (!newItem.image || !newItem.title || !newItem.description) {
            alert('Please fill at least image, title, and description');
            return;
        }

        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        localStorage.setItem(`clothingItems_${handyman_id}`, JSON.stringify(updatedItems));

        setNewItem({
            image: null,
            title: '',
            description: '',
            fabric: '',
            color: '',
            size: '',
            brand: '',
            condition: ''
        });
        setShowForm(false);
    };

    return (
        <>
            <DashboardNavbar />
            <div className="handymanProfile_details_outer">
                <div className="container">
                    <div className="handymanProfile_details">
                        <div className="handyman_photograph">
                            <img src={handymanData?.profile} alt="profile" />
                        </div>
                        <div className="handyman_details_container">
                            <div className="handyman_details handyman_name">
                                Name: {handymanData?.name}
                            </div>
                            <div className="handyman_details handyman_phone">
                                Phone Number: +91 {handymanData?.phone}
                            </div>
                        </div>
                    </div>

                    {/* Add Clothing Item Section */}
                    <div style={{ marginTop: '30px' }}>
                        <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
                            {showForm ? 'Cancel' : 'Add Clothing Item'}
                        </button>

                        {showForm && (
                            <div style={{
                                border: '1px solid #ccc',
                                padding: '15px',
                                marginTop: '15px',
                                borderRadius: '8px'
                            }}>
                                <h4>Add Clothing Item</h4>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setNewItem({ ...newItem, image: URL.createObjectURL(e.target.files[0]) })
                                    }
                                    style={{ display: 'block', marginBottom: '10px' }}
                                />

                                <input
                                    type="text"
                                    placeholder="Title (e.g., Blue Denim Jacket)"
                                    value={newItem.title}
                                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                                    style={{ display: 'block', marginBottom: '10px' }}
                                />

                                <textarea
                                    placeholder="Description (e.g., Very comfortable, used only once...)"
                                    value={newItem.description}
                                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                    rows={3}
                                    style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                                />

                                <input
                                    type="text"
                                    placeholder="Fabric (e.g., Cotton)"
                                    value={newItem.fabric}
                                    onChange={(e) => setNewItem({ ...newItem, fabric: e.target.value })}
                                    style={{ display: 'block', marginBottom: '10px' }}
                                />

                                <input
                                    type="text"
                                    placeholder="Color (e.g., Navy Blue)"
                                    value={newItem.color}
                                    onChange={(e) => setNewItem({ ...newItem, color: e.target.value })}
                                    style={{ display: 'block', marginBottom: '10px' }}
                                />

                                <input
                                    type="text"
                                    placeholder="Size (e.g., M, L, XL)"
                                    value={newItem.size}
                                    onChange={(e) => setNewItem({ ...newItem, size: e.target.value })}
                                    style={{ display: 'block', marginBottom: '10px' }}
                                />

                                <input
                                    type="text"
                                    placeholder="Brand (e.g., Levi's, H&M)"
                                    value={newItem.brand}
                                    onChange={(e) => setNewItem({ ...newItem, brand: e.target.value })}
                                    style={{ display: 'block', marginBottom: '10px' }}
                                />

                                <select
                                    value={newItem.condition}
                                    onChange={(e) => setNewItem({ ...newItem, condition: e.target.value })}
                                    style={{ display: 'block', marginBottom: '10px' }}
                                >
                                    <option value="">Select Condition</option>
                                    <option value="New">New</option>
                                    <option value="Gently Used">Gently Used</option>
                                    <option value="Old">Old</option>
                                </select>

                                <button onClick={handleAddItem} className="btn btn-success">
                                    Add Item
                                </button>
                            </div>
                        )}

                        {/* Display Items */}
                        <div style={{ marginTop: '30px' }}>
                            <h4>Uploaded Clothing Items</h4>
                            {items.length === 0 ? (
                                <p>No items uploaded yet.</p>
                            ) : (
                                <div className="clothing-items-grid">
                                    {items.map((item, index) => (
                                        <div key={index} className="clothing-item-card">
                                            {item.image && (
                                                <img src={item.image} alt="Clothing" />
                                            )}
                                            <p><strong>Title:</strong> {item.title}</p>
                                            <p><strong>Description:</strong> {item.description}</p>
                                            <p><strong>Fabric:</strong> {item.fabric}</p>
                                            <p><strong>Color:</strong> {item.color}</p>
                                            <p><strong>Size:</strong> {item.size}</p>
                                            <p><strong>Brand:</strong> {item.brand}</p>
                                            <p><strong>Condition:</strong> {item.condition}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HandymanProfile;
