var srcIndex = JSON.parse('{\
"necsim_core":["",[["cogs",[],["active_lineage_sampler.rs","backup.rs","coalescence_sampler.rs","dispersal_sampler.rs","emigration_exit.rs","event_sampler.rs","habitat.rs","immigration_entry.rs","lineage_reference.rs","lineage_store.rs","mod.rs","rng.rs","speciation_probability.rs","turnover_rate.rs"]],["landscape",[],["extent.rs","location.rs","mod.rs"]],["reporter",[],["boolean.rs","combinator.rs","filter.rs","group.rs","impl.rs","mod.rs","null.rs","used.rs"]],["simulation",[["partial",[],["active_lineage_sampler.rs","emigration_exit.rs","event_sampler.rs","mod.rs"]],["process",[],["immigration.rs","local.rs","mod.rs"]]],["backup.rs","builder.rs","mod.rs"]]],["event.rs","lib.rs","lineage.rs"]],\
"necsim_core_bond":["",[],["closed_open_unit_f64.rs","closed_unit_f64.rs","lib.rs","non_negative_f64.rs","non_positive_f64.rs","non_zero_one_u64.rs","off_by_one_u32.rs","off_by_one_u64.rs","open_closed_unit_f64.rs","positive_f64.rs"]],\
"necsim_core_maths":["",[],["lib.rs"]],\
"necsim_impls_cuda":["",[["cogs",[],["maths.rs","mod.rs","rng.rs"]]],["event_buffer.rs","lib.rs","utils.rs","value_buffer.rs"]],\
"necsim_impls_no_std":["",[["alias",[],["mod.rs","packed.rs"]],["cogs",[["active_lineage_sampler",[["alias",[["individual",[],["mod.rs","sampler.rs"]],["location",[],["mod.rs","sampler.rs"]],["sampler",[["indexed",[],["mod.rs"]],["stack",[],["mod.rs"]]],["mod.rs"]]],["mod.rs"]],["classical",[],["mod.rs","sampler.rs"]],["independent",[["event_time_sampler",[],["const.rs","exp.rs","fixed.rs","geometric.rs","mod.rs","poisson.rs"]]],["mod.rs","sampler.rs","singular.rs"]],["resuming",[],["lineage.rs","mod.rs","sampler.rs"]]],["mod.rs","singular.rs"]],["coalescence_sampler",[],["conditional.rs","independent.rs","mod.rs","optional_coalescence.rs","unconditional.rs"]],["dispersal_sampler",[["in_memory",[["alias",[],["dispersal.rs","mod.rs"]],["cumulative",[],["contract.rs","dispersal.rs","mod.rs"]],["packed_alias",[],["dispersal.rs","mod.rs"]],["separable_alias",[],["dispersal.rs","mod.rs"]]],["contract.rs","mod.rs"]],["trespassing",[],["mod.rs","uniform.rs"]]],["almost_infinite_clark2dt.rs","almost_infinite_normal.rs","mod.rs","non_spatial.rs","spatially_implicit.rs","wrapping_noise.rs"]],["emigration_exit",[["independent",[["choice",[],["always.rs","mod.rs","probabilistic.rs"]]],["mod.rs"]]],["domain.rs","mod.rs","never.rs"]],["event_sampler",[["gillespie",[["conditional",[],["mod.rs","probability.rs"]]],["mod.rs","unconditional.rs"]]],["independent.rs","mod.rs","tracking.rs","unconditional.rs"]],["habitat",[["wrapping_noise",[["opensimplex_noise",[["vector",[],["mod.rs","vec2.rs","vec3.rs","vec4.rs"]]],["mod.rs","open_simplex_noise_2d.rs","open_simplex_noise_3d.rs","open_simplex_noise_4d.rs","utils.rs"]]],["mod.rs"]]],["almost_infinite.rs","in_memory.rs","mod.rs","non_spatial.rs","spatially_implicit.rs"]],["immigration_entry",[],["buffered.rs","mod.rs","never.rs"]],["lineage_reference",[],["in_memory.rs","mod.rs"]],["lineage_store",[["coherent",[["globally",[["gillespie",[],["mod.rs","store.rs"]],["singleton_demes",[],["mod.rs","store.rs"]]],["mod.rs"]],["locally",[["classical",[],["mod.rs","store.rs"]]],["mod.rs"]]],["mod.rs"]]],["independent.rs","mod.rs"]],["maths",[],["intrinsics.rs","mod.rs","reproducible.rs"]],["origin_sampler",[["singleton_demes",[],["circle.rs","mod.rs","rectangle.rs"]]],["decomposition.rs","in_memory.rs","mod.rs","non_spatial.rs","pre_sampler.rs","resuming.rs","spatially_implicit.rs"]],["rng",[],["mod.rs","rand.rs","seahash.rs","wyhash.rs"]],["speciation_probability",[],["mod.rs","spatially_implicit.rs","uniform.rs"]],["turnover_rate",[],["in_memory.rs","mod.rs","uniform.rs"]]],["mod.rs"]],["decomposition",[["equal",[],["area.rs","mod.rs","weight.rs"]]],["mod.rs","modulo.rs","monolithic.rs","radial.rs"]],["parallelisation",[["independent",[["monolithic",[["reporter",[],["live.rs","mod.rs","recorded.rs"]]],["mod.rs"]]],["individuals.rs","landscape.rs","mod.rs","reporter.rs"]],["monolithic",[],["averaging.rs","lockstep.rs","mod.rs","monolithic.rs","optimistic.rs","optimistic_lockstep.rs","reporter.rs"]]],["mod.rs"]]],["array2d.rs","cache.rs","lib.rs"]],\
"necsim_impls_std":["",[["cogs",[["dispersal_sampler",[["in_memory",[],["error.rs","mod.rs"]]],["mod.rs"]],["rng",[],["mod.rs","pcg.rs"]]],["mod.rs"]],["event_log",[["replay",[],["globbed.rs","mod.rs","segment.rs","sorted_segments.rs"]]],["mod.rs","recorder.rs"]],["lineage_file",[],["loader.rs","mod.rs","saver.rs"]]],["lib.rs"]],\
"necsim_partitioning_core":["",[],["context.rs","iterator.rs","lib.rs","partition.rs"]],\
"necsim_partitioning_monolithic":["",[],["lib.rs","live.rs","recorded.rs"]],\
"necsim_partitioning_mpi":["",[["partition",[],["mod.rs","parallel.rs","root.rs","utils.rs"]]],["lib.rs","request.rs"]],\
"necsim_plugins_common":["",[],["biodiversity.rs","event_counter.rs","execution_time.rs","lib.rs","progress.rs","verbose.rs"]],\
"necsim_plugins_core":["",[["import",[],["combinator.rs","mod.rs","plugin.rs","serde.rs"]]],["export.rs","lib.rs"]],\
"necsim_plugins_csv":["",[],["lib.rs"]],\
"necsim_plugins_metacommunity":["",[],["lib.rs"]],\
"necsim_plugins_species":["",[["individual",[["feather",[],["dataframe.rs","mod.rs","reporter.rs"]],["sqlite",[],["database.rs","mod.rs","reporter.rs"]]],["mod.rs"]],["location",[["feather",[],["dataframe.rs","mod.rs","reporter.rs"]]],["mod.rs"]]],["identity.rs","lib.rs","state.rs"]],\
"necsim_plugins_statistics":["",[],["coverage.rs","lib.rs","speciation.rs","turnover.rs"]],\
"necsim_plugins_tskit":["",[["tree",[],["metadata.rs","mod.rs","reporter.rs","table.rs"]]],["lib.rs","provenance.rs"]],\
"rustcoalescence":["",[["args",[["cli",[],["mod.rs","replay.rs"]],["config",[["rng",[],["base32.rs","mod.rs"]],["sample",[],["mod.rs","origin.rs"]]],["algorithm.rs","mod.rs","partitioning.rs","pause.rs","scenario.rs"]],["utils",[["ser",[],["impl.rs","mod.rs"]]],["mod.rs","parse.rs"]]],["mod.rs"]],["cli",[["simulate",[["dispatch",[["valid",[],["algorithm_scenario.rs","info.rs","launch.rs","mod.rs","partitioning.rs","rng.rs"]]],["mod.rs"]],["parse",[],["algorithm.rs","event_log.rs","fields.rs","mod.rs","partitioning.rs","pause.rs","reporters.rs","rng.rs","sample.rs","scenario.rs","speciation.rs"]]],["mod.rs","pause.rs"]]],["mod.rs","replay.rs"]]],["main.rs","minimal_logger.rs","reporter.rs"]],\
"rustcoalescence_algorithms":["",[],["lib.rs","result.rs","strategy.rs"]],\
"rustcoalescence_algorithms_cuda":["",[["initialiser",[],["fixup.rs","genesis.rs","mod.rs","resume.rs"]],["parallelisation",[],["mod.rs","monolithic.rs"]]],["arguments.rs","cuda.rs","error.rs","info.rs","launch.rs","lib.rs"]],\
"rustcoalescence_algorithms_cuda_cpu_kernel":["",[],["lib.rs","link.rs","patch.rs"]],\
"rustcoalescence_algorithms_cuda_gpu_kernel":["",[],["lib.rs"]],\
"rustcoalescence_algorithms_gillespie":["",[["event_skipping",[["initialiser",[],["fixup.rs","genesis.rs","mod.rs","resume.rs"]]],["launch.rs","mod.rs"]],["gillespie",[["classical",[["initialiser",[],["fixup.rs","genesis.rs","mod.rs","resume.rs"]]],["launch.rs","mod.rs"]],["turnover",[["initialiser",[],["fixup.rs","genesis.rs","mod.rs","resume.rs"]]],["launch.rs","mod.rs"]]],["mod.rs"]]],["arguments.rs","lib.rs"]],\
"rustcoalescence_algorithms_independent":["",[["initialiser",[],["fixup.rs","genesis.rs","mod.rs","resume.rs"]]],["arguments.rs","launch.rs","lib.rs"]],\
"rustcoalescence_scenarios":["",[["almost_infinite",[],["clark2dt.rs","mod.rs","normal.rs"]],["spatially_explicit",[["maps",[["tiff",[],["data_type.rs","mod.rs"]]],["mod.rs"]],["turnover",[],["map.rs","mod.rs","uniform.rs"]]],["mod.rs"]]],["lib.rs","non_spatial.rs","spatially_implicit.rs","wrapping_noise.rs"]]\
}');
createSrcSidebar();
