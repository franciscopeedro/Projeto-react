import {Viewer, XKTLoaderPlugin} from "https://github.com/xeokit/xeokit-bim-viewer";

const viewer = new Viewer({
    canvasId: "myCanvas"
});

viewer.camera.eye = [-3.93, 2.85, 27.01];
viewer.camera.look = [4.40, 3.72, 8.89];
viewer.camera.up = [-0.01, 0.99, 0.039];

const xktLoader = new XKTLoaderPlugin(viewer);

const sceneModel = xktLoader.load({
    id: "myModel",
    src: "../assets/models/xkt/v10/glTF-Embedded/Duplex_A_20110505.glTFEmbedded.xkt", // Creates a MetaObject instances in scene.metaScene.metaObjects
    edges: true
});

var lastEntity = null;

viewer.scene.input.on("mousemove", function (coords) {

    var hit = viewer.scene.pick({
        canvasPos: coords
    });

    if (hit) {

        if (!lastEntity || hit.entity.id !== lastEntity.id) {

            if (lastEntity) {
                lastEntity.selected = false;
            }

            lastEntity = hit.entity;
            hit.entity.selected = true;
        }
    } else {

        if (lastEntity) {
            lastEntity.selected = false;
            lastEntity = null;
        }
    }
});

export default {viewer,xktLoader}
