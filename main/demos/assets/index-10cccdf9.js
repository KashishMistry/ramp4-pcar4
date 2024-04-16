import { cj as FixtureInstance, hv as useGridStore, hs as markRaw, ht as useAppbarStore } from './main-942c0e56.js';
import { T as TableStateManager, G as GridScreenV } from './screen-bbd9ccee.js';
import './preload-helper-a4975f27.js';

class GridAPI extends FixtureInstance {
  gridStore = useGridStore(this.$vApp.$pinia);
  /**
   * Open the grid with the given id.
   *
   * @param {string} id
   * @param {boolean} [open] force panel open or closed
   * @memberof GridAPI
   */
  toggleGrid(id, open) {
    const gridId = this.gridStore.getGridId(id);
    if (!gridId) {
      const layerGridConfigs = this.getLayerFixtureConfigs();
      this.gridStore.addGrid({
        id,
        layerIds: [id],
        state: new TableStateManager(layerGridConfigs[id]),
        fieldMap: {}
      });
    }
    const prevId = this.gridStore.currentId;
    this.gridStore.currentId = gridId ?? id;
    const panel = this.$iApi.panel.get("grid");
    if (open === false) {
      panel.close();
      return;
    }
    if (!panel.isOpen || !panel.isVisible) {
      this.$iApi.panel.open("grid");
    } else if (prevId !== id || open === true) {
      panel.show({ screen: "grid-screen", props: { key: id } });
    } else {
      panel.close();
    }
  }
  /**
   * Parses the grid config JSON snippet from the config file.
   *
   * @param {any} config
   * @memberof GridAPI
   */
  _parseConfig(config) {
    this.handlePanelWidths(["grid"]);
    this.handlePanelTeleports(["grid"]);
    const layerGridConfigs = this.getLayerFixtureConfigs();
    if (config && config.mergeGrids) {
      config.mergeGrids.forEach((mergeGrid) => {
        const layerIds = [];
        const { gridId, layers, fieldMap, options } = mergeGrid;
        layers.forEach((layer) => {
          if (layer.sublayers) {
            layer.sublayers?.forEach((sl) => {
              layerIds.push(`${layer.layerId}-${sl}`);
              delete layerGridConfigs[`${layer.layerId}-${sl}`];
            });
          } else {
            layerIds.push(layer.layerId);
            delete layerGridConfigs[layer.layerId];
          }
        });
        const mapping = {};
        fieldMap?.forEach((map) => {
          map.sources.forEach((source) => {
            mapping[source] = map.field;
          });
        });
        const gridConfig = {
          id: gridId,
          layerIds,
          state: new TableStateManager(options),
          fieldMap: mapping
        };
        this.gridStore.addGrid(gridConfig);
      });
    }
    Object.keys(layerGridConfigs).forEach((layerId) => {
      const gridConfig = {
        id: layerId,
        layerIds: [layerId],
        state: new TableStateManager(layerGridConfigs[layerId]),
        fieldMap: {}
      };
      this.gridStore.addGrid(gridConfig);
    });
  }
}

const messages = {"en":{"grid.title":"Datatable","grid.alertName":"Grid","grid.splash.error":"Error: Failed to load the layer's data.","grid.splash.loading":"Loading data...","grid.splash.building":"Building table...","grid.splash.cancel":"Cancel","grid.clearAll":"Clear search and filters","grid.pinColumns":"Pin columns","grid.export":"Export","grid.layer.loading":"The layer is loading...","grid.label.columns":"Hide columns","grid.label.copied":"Copied","grid.label.copy":"Press ctrl + c or double click to copy","grid.label.filters.show":"Show filters","grid.label.filters.hide":"Hide filters","grid.label.filters.apply":"Apply filters to map","grid.header.sort.0":"Sort ascending","grid.header.sort.1":"Sort descending","grid.header.sort.2":"Sort default","grid.header.reorder.left":"Move left","grid.header.reorder.right":"Move right","grid.filters.label.global":"Search table","grid.filters.column.label.text":"Search {0}...","grid.filters.clear":"Clear filters","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.date.max":"Max Date","grid.filters.date.min":"Min Date","grid.filters.label.info":"{range} of {total} entries shown","grid.filters.label.filtered":"(filtered from {max} total entries)","grid.filters.extent":"Filter by extent","grid.cells.zoom":"Zoom to feature","grid.cells.zoom.zooming":"Zooming...","grid.cells.zoom.error":"Zoom failed","grid.cells.zoom.zoomed":"Zoomed","grid.cells.alert.zoom":"Zoomed into feature","grid.cells.details":"Details","grid.button.title":"Grid"},"fr":{"grid.title":"Tableau de données","grid.alertName":"Grille","grid.splash.error":"Erreur : Échec du chargement des données de la couche.","grid.splash.loading":"Chargement des données...","grid.splash.building":"Création du tableau...","grid.splash.cancel":"Annuler","grid.clearAll":"Effacer la recherche et les filtres","grid.pinColumns":"Épingler les colonnes","grid.export":"Exporter","grid.layer.loading":"La couche est en cours de téléchargement...","grid.label.columns":"Masquer les colonnes","grid.label.copied":"Copié","grid.label.copy":"Appuyez sur Ctrl + C ou double-cliquez pour copier","grid.label.filters.show":"Afficher les filtres","grid.label.filters.hide":"Masquer les filtres","grid.label.filters.apply":"Appliquer les filtres à la carte","grid.header.sort.0":"Tri ascendant","grid.header.sort.1":"Tri descendant","grid.header.sort.2":"Tri par défaut","grid.header.reorder.left":"Déplacer vers la gauche","grid.header.reorder.right":"Déplacer vers la droite","grid.filters.label.global":"Tableau de recherche","grid.filters.column.label.text":"Rechercher {0}...","grid.filters.clear":"Supprimer les filtres","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.date.max":"Date max","grid.filters.date.min":"Date min","grid.filters.label.info":"{range} de {total} saisies affichées","grid.filters.label.filtered":"(filtré à partir d'un total de {max} saisies)","grid.filters.extent":"Filtrer par étendue","grid.cells.zoom":"Zoom à l'élément","grid.cells.zoom.zooming":"Zoom en cours...","grid.cells.zoom.error":"Échec du zoom","grid.cells.zoom.zoomed":"Zoom terminé","grid.cells.alert.zoom":"Zoom sur la caractéristique","grid.cells.details":"Détails","grid.button.title":"Grille"}};

class GridFixture extends GridAPI {
  async added() {
    this.$iApi.panel.register(
      {
        grid: {
          screens: {
            "grid-screen": markRaw(GridScreenV)
          },
          style: {
            width: "450px"
          },
          controls: {
            expand: true
          },
          button: {
            tooltip: "grid.button.title",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Atable_chart
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /> <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" /></svg>'
          },
          expanded: true,
          alertName: "grid.alertName"
        }
      },
      { i18n: { messages } }
    );
    this._parseConfig(this.config);
  }
  removed() {
    if (this.$iApi.fixture.get("appbar")) {
      const appbarStore = useAppbarStore(this.$vApp.$pinia);
      appbarStore.removeButton("grid");
    }
    const gridStore = useGridStore(this.$vApp.$pinia);
    gridStore.$reset();
    this.$iApi.panel.remove("grid");
  }
}

export { GridFixture as default };
