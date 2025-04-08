import React from "react";
import styles from "@/style/ProductSection/ProductSection.module.css";
import { FiRefreshCcw } from "react-icons/fi";
const CategoryFilter = () => {
  return (
    <div
      className={`${styles.container} ${styles.haloMultiCategoryWrapper} flex-wrap `}
    >
      <div className={styles.categoryFilterMobile}>
        <div className={styles.categoryFilter}>
          <div className={styles.haloMultiCategory} data-multi-level="false">
            <div
              className={`${styles.haloMultilevelCategoryFilter} flex-col lg:flex-row  `}
            >
              <div className={styles.formLabel}>
                <h2 className={styles.title}>Select Your Part</h2>
                <p className={styles.desc}>
                  Customize, Modify, Upgrade, Repair, Replace
                </p>
              </div>
              <div
                className={`${styles.formWrapper} flex-col lg:flex-row md:flex-row `}
              >
                {/* Level 1 Dropdown */}
                <div className={styles.formField}>
                  <select
                    id="halo_select_level_1"
                    className={`${styles.formSelect} w-[95vw] lg:w-[20rem] sm:w-[20rem]`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Level 1...
                    </option>
                    <option value="0">Memory</option>
                    <option value="1">Motherboards</option>
                    <option value="2">Networking</option>
                    <option value="3">PC &amp; Servers</option>
                    <option value="4">Power Supplies</option>
                    <option value="5">Printers &amp; Cartridges</option>
                    <option value="6">Processors</option>
                    <option value="7">Storage Devices</option>
                    <option value="8">Audio-Video Devices</option>
                    <option value="9">Accessories</option>
                  </select>
                </div>

                {/* Level 2 Dropdown */}
                <div className={styles.formField}>
                  <select
                    id="halo_select_level_2"
                    className={`${styles.formSelect} w-[95vw] lg:w-[20rem] sm:w-[20rem]`}
                    defaultValue=""
                  >
                    <option value={""} disabled>
                      Select Level 2...
                    </option>
                  </select>
                </div>

                {/* Level 3 Dropdown */}
                <div className={styles.formField}>
                  <select
                    id="halo_select_level_3"
                    className={`${styles.formSelect} w-[95vw] lg:w-[20rem] sm:w-[20rem]  `}
                    defaultValue={""}
                  >
                    <option value={""} disabled>
                      Select Level 3...
                    </option>
                  </select>
                </div>

                {/* Buttons */}
                <div className={styles.groupButton}>
                  <button
                    className={`${styles.btnPrimary} btn-primary`}
                    title="RUN"
                  >
                    RUN
                  </button>
                  <button
                    className={`${styles.btnPrimary} btn-primary `}
                    title="Refresh"
                  >
                    <FiRefreshCcw  size={20}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
