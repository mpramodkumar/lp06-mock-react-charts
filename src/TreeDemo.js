import { Tree } from 'primereact/components/tree/Tree';
import { Tooltip } from 'primereact/components/tooltip/Tooltip';
import React, { Component } from 'react';
import './TreeDemo.css';
class TreeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedFile: null, title: null };
        this.onBeforeTooltipShow = this.onBeforeTooltipShow.bind(this);
        this.onNodeExpand = this.onNodeExpand.bind(this);
    }
    onSelectionChange(e) {
        this.setState({ selectedFile: e.selection });
    }

    onBeforeTooltipShow(e) {
        let element = e.originalEvent.target;
        let label = element.firstChild.innerText;
        if (label && label.length) {
            this.setState({ title: "'" + label + "' Tooltip" });
        }
    }

    onNodeExpand(e) {
        let parentElement = e.originalEvent.target.parentElement;

        setTimeout(() => {
            let nextElementSibling = parentElement.nextElementSibling;
            if (nextElementSibling) {
                nextElementSibling.id = "tempID";
                this.tooltipEl.bindMouseEvents("#tempID .ui-treenode-label");
                nextElementSibling.id = "";
            }
        }, 100);
    }

    render() {
        var data = [
            {
                "label": "ICD-10-CM Codes",
                "data": "ICD-10-CM Codes Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                    "label": "A00-B99",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "A00-A09 Intestinal infectious diseases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A15-A19 Tuberculosis", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A20-A28 Certain zoonotic bacterial diseases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A30-A49 Other bacterial diseases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A50-A64 Infections with a predominantly sexual", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A65-A69 Other spirochetal diseases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A70-A74 Other diseases caused by chlamydiae", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A75-A79 Rickettsioses", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A80-A89 Viral and prion infections", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "A90-A99 Arthropod-borne viral fevers and viral", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B00-B09 Viral infections characterized by skin", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B10-B10 Other human herpesviruses", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B15-B19 Viral hepatitis", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B20-B20 Human immunodeficiency virus [HIV]", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B25-B34 Other viral diseases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B35-B49 Mycoses", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B50-B64 Protozoal diseases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B65-B83 Helminthiases", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B85-B89 Pediculosis, acariasis and other", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B90-B94 Sequelae of infectious and parasitic", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B95-B97 Bacterial and viral infectious agent", "icon": "fa-file-word-o", "data": "Expenses Document" },
                        { "label": "B99-B99 Other infectious diseases", "icon": "fa-file-word-o", "data": "Expenses Document" }
                    ]
                },
                {
                    "label": "C00-D49",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C00-C14 Malignant neoplasms of lip, oral cavity ...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C15-C26 Malignant neoplasms of digestive organs", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C30-C39 Malignant neoplasms of respiratory and i...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C40-C41 Malignant neoplasms of bone and articula...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C43-C44 Melanoma and other malignant neoplasms o...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C45-C49 Malignant neoplasms of mesothelial and s...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C50-C50 Malignant neoplasms of breast", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C51-C58 Malignant neoplasms of female genital or...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C60-C63 Malignant neoplasms of male genital orga...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C64-C68 Malignant neoplasms of urinary tract", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C69-C72 Malignant neoplasms of eye, brain and ot...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C73-C75 Malignant neoplasms of thyroid and other...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C76-C80 Malignant neoplasms of ill-defined, othe...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C7A-C7A Malignant neuroendocrine tumors", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C7B-C7B Secondary neuroendocrine tumors", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "C81-C96 Malignant neoplasms of lymphoid, hematop...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "D00-D09 In situ neoplasms", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "D10-D36 Benign neoplasms, except benign neuroend...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "D37-D48 Neoplasms of uncertain behavior, polycyt...", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "D3A-D3A Benign neuroendocrine tumors", "icon": "fa-file-word-o", "data": "Invoices for this month" },
                        { "label": "D49-D49 Neoplasms of unspecified behavior", "icon": "fa-file-word-o", "data": "Invoices for this month" }
                    ]
                },
                {
                    "label": "D50-D89",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }
                    ]
                },
                {
                    "label": "E00-E89",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }
                    ]
                },
                {
                    "label": "F01-F99",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }
                    ]
                },
                {
                    "label": "G00-G99",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }
                    ]
                },
                {
                    "label": "H00-H59",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }
                    ]
                }
                ]
            }
        ];

        return (
            <div id="layout-content">
                <div className="content-section implementation">
                    
                    <Tooltip ref={(el) => this.tooltipEl = el} for="#mytree .ui-treenode-label"
                        title={this.state.title} onBeforeShow={this.onBeforeTooltipShow} />
                    <Tree id="mytree" value={data} onNodeExpand={this.onNodeExpand} selectionMode="single" selectionChange={this.onSelectionChange.bind(this)} />
                </div>
            </div>
        )
    }
}

export default TreeDemo;