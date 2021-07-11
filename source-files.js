var N = null;var sourcesIndex = {};
sourcesIndex["array2d"] = {"name":"","files":["lib.rs"]};
sourcesIndex["float_next_after"] = {"name":"","files":["lib.rs"]};
sourcesIndex["necsim_core"] = {"name":"","dirs":[{"name":"cogs","files":["active_lineage_sampler.rs","backup.rs","coalescence_sampler.rs","dispersal_sampler.rs","emigration_exit.rs","event_sampler.rs","habitat.rs","immigration_entry.rs","lineage_reference.rs","lineage_store.rs","mod.rs","origin_sampler.rs","rng.rs","speciation_probability.rs","turnover_rate.rs"]},{"name":"landscape","files":["extent.rs","location.rs","mod.rs"]},{"name":"reporter","files":["boolean.rs","combinator.rs","filter.rs","group.rs","impl.rs","mod.rs","null.rs","used.rs"]},{"name":"simulation","dirs":[{"name":"partial","files":["active_lineager_sampler.rs","emigration_exit.rs","event_sampler.rs","mod.rs"]},{"name":"process","files":["immigration.rs","local.rs","mod.rs"]}],"files":["backup.rs","builder.rs","mod.rs"]}],"files":["event.rs","intrinsics.rs","lib.rs","lineage.rs"]};
sourcesIndex["necsim_core_bond"] = {"name":"","files":["closed_unit_f64.rs","lib.rs","non_negative_f64.rs","non_zero_one_u64.rs","partition.rs","positive_f64.rs","positive_unit_f64.rs"]};
sourcesIndex["necsim_impls_cuda"] = {"name":"","dirs":[{"name":"cogs","files":["mod.rs","rng.rs"]}],"files":["event_buffer.rs","lib.rs","value_buffer.rs"]};
sourcesIndex["necsim_impls_no_std"] = {"name":"","dirs":[{"name":"alias","files":["mod.rs","packed.rs"]},{"name":"cogs","dirs":[{"name":"active_lineage_sampler","dirs":[{"name":"classical","files":["mod.rs","sampler.rs"]},{"name":"independent","dirs":[{"name":"event_time_sampler","files":["exp.rs","fixed.rs","geometric.rs","mod.rs","poisson.rs"]}],"files":["mod.rs","sampler.rs","singular.rs"]}],"files":["mod.rs"]},{"name":"coalescence_sampler","files":["conditional.rs","independent.rs","mod.rs","optional_coalescence.rs","unconditional.rs"]},{"name":"dispersal_sampler","dirs":[{"name":"in_memory","dirs":[{"name":"alias","files":["dispersal.rs","mod.rs"]},{"name":"cumulative","files":["contract.rs","dispersal.rs","mod.rs"]},{"name":"packed_alias","files":["dispersal.rs","mod.rs"]},{"name":"separable_alias","files":["dispersal.rs","mod.rs"]}],"files":["contract.rs","mod.rs"]}],"files":["almost_infinite_normal.rs","mod.rs","non_spatial.rs","spatially_implicit.rs"]},{"name":"emigration_exit","dirs":[{"name":"independent","dirs":[{"name":"choice","files":["always.rs","mod.rs","probabilistic.rs"]}],"files":["mod.rs"]}],"files":["domain.rs","mod.rs","never.rs"]},{"name":"event_sampler","dirs":[{"name":"gillespie","dirs":[{"name":"conditional","files":["mod.rs","probability.rs"]}],"files":["mod.rs","unconditional.rs"]}],"files":["independent.rs","mod.rs","unconditional.rs"]},{"name":"habitat","files":["almost_infinite.rs","in_memory.rs","mod.rs","non_spatial.rs","spatially_implicit.rs"]},{"name":"immigration_entry","files":["buffered.rs","mod.rs","never.rs"]},{"name":"lineage_reference","files":["in_memory.rs","mod.rs"]},{"name":"lineage_store","dirs":[{"name":"coherent","dirs":[{"name":"globally","dirs":[{"name":"almost_infinite","files":["mod.rs","store.rs"]},{"name":"gillespie","files":["mod.rs","store.rs"]}],"files":["mod.rs"]},{"name":"locally","dirs":[{"name":"classical","files":["mod.rs","store.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["independent.rs","mod.rs"]},{"name":"origin_sampler","files":["almost_infinite.rs","decomposition.rs","in_memory.rs","mod.rs","non_spatial.rs","pre_sampler.rs","spatially_implicit.rs"]},{"name":"rng","files":["aes.rs","fixedseahash.rs","mod.rs","seahash.rs","wyhash.rs","wyrand.rs"]},{"name":"speciation_probability","files":["mod.rs","spatially_implicit.rs","uniform.rs"]},{"name":"turnover_rate","files":["mod.rs","uniform.rs"]}],"files":["mod.rs"]},{"name":"decomposition","dirs":[{"name":"equal","files":["area.rs","mod.rs","weight.rs"]}],"files":["mod.rs","modulo.rs","monolithic.rs","radial.rs"]},{"name":"parallelisation","dirs":[{"name":"independent","dirs":[{"name":"monolithic","dirs":[{"name":"reporter","files":["live.rs","mod.rs","recorded.rs"]}],"files":["mod.rs"]}],"files":["event_slice.rs","individuals.rs","landscape.rs","mod.rs","reporter.rs"]},{"name":"monolithic","files":["averaging.rs","lockstep.rs","mod.rs","monolithic.rs","optimistic.rs","optimistic_lockstep.rs","reporter.rs"]}],"files":["mod.rs"]}],"files":["cache.rs","lib.rs"]};
sourcesIndex["necsim_impls_std"] = {"name":"","dirs":[{"name":"cogs","dirs":[{"name":"active_lineage_sampler","dirs":[{"name":"gillespie","files":["event_time.rs","mod.rs","sampler.rs"]}],"files":["mod.rs"]},{"name":"dispersal_sampler","dirs":[{"name":"in_memory","files":["error.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"rng","files":["mod.rs","pcg.rs","std.rs"]}],"files":["mod.rs"]},{"name":"event_log","dirs":[{"name":"replay","files":["globbed.rs","mod.rs","segment.rs","sorted_segments.rs"]}],"files":["mod.rs","recorder.rs"]}],"files":["lib.rs"]};
sourcesIndex["necsim_partitioning_core"] = {"name":"","files":["context.rs","iterator.rs","lib.rs"]};
sourcesIndex["necsim_partitioning_monolithic"] = {"name":"","files":["lib.rs","live.rs","recorded.rs"]};
sourcesIndex["necsim_partitioning_mpi"] = {"name":"","dirs":[{"name":"partition","files":["mod.rs","parallel.rs","root.rs"]}],"files":["lib.rs"]};
sourcesIndex["necsim_plugins_common"] = {"name":"","files":["biodiversity.rs","event_counter.rs","execution_time.rs","lib.rs","progress.rs","verbose.rs"]};
sourcesIndex["necsim_plugins_core"] = {"name":"","dirs":[{"name":"import","files":["combinator.rs","mod.rs","plugin.rs","serde.rs"]}],"files":["export.rs","lib.rs"]};
sourcesIndex["necsim_plugins_csv"] = {"name":"","files":["lib.rs"]};
sourcesIndex["necsim_plugins_metacommunity"] = {"name":"","files":["lib.rs"]};
sourcesIndex["necsim_plugins_species"] = {"name":"","dirs":[{"name":"species","files":["database.rs","mod.rs","reporter.rs"]}],"files":["lib.rs"]};
sourcesIndex["necsim_plugins_statistics"] = {"name":"","files":["coverage.rs","lib.rs","speciation.rs","turnover.rs"]};
sourcesIndex["ron"] = {"name":"","dirs":[{"name":"de","files":["id.rs","mod.rs","tag.rs","value.rs"]},{"name":"ser","files":["mod.rs","value.rs"]}],"files":["error.rs","extensions.rs","lib.rs","parse.rs","value.rs"]};
sourcesIndex["rust_cuda"] = {"name":"","dirs":[{"name":"utils","dirs":[{"name":"exchange","dirs":[{"name":"buffer","files":["common.rs","host.rs","mod.rs"]}],"files":["mod.rs","wrapper.rs"]}],"files":["mod.rs"]}],"files":["common.rs","host.rs","lib.rs"]};
sourcesIndex["rustacuda"] = {"name":"","dirs":[{"name":"memory","dirs":[{"name":"device","files":["device_box.rs","device_buffer.rs","device_slice.rs","mod.rs"]}],"files":["array.rs","locked.rs","malloc.rs","mod.rs","unified.rs"]}],"files":["context.rs","derive_compile_fail.rs","device.rs","error.rs","event.rs","function.rs","lib.rs","module.rs","prelude.rs","stream.rs"]};
sourcesIndex["rustacuda_core"] = {"name":"","dirs":[{"name":"memory","files":["mod.rs","pointer.rs"]}],"files":["lib.rs"]};
sourcesIndex["rustcoalescence"] = {"name":"","dirs":[{"name":"args","files":["mod.rs","parse.rs"]},{"name":"cli","dirs":[{"name":"simulate","files":["impl.rs","mod.rs","monolithic.rs"]}],"files":["mod.rs","replay.rs"]},{"name":"tiff","files":["data_type.rs","mod.rs"]}],"files":["main.rs","maps.rs","minimal_logger.rs","reporter.rs"]};
sourcesIndex["rustcoalescence_algorithms"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rustcoalescence_algorithms_cuda"] = {"name":"","dirs":[{"name":"kernel","dirs":[{"name":"launch","files":["mod.rs","with_dimensions.rs","with_stream.rs"]}],"files":["impl.rs","mod.rs","specialiser.rs"]},{"name":"parallelisation","files":["mod.rs","monolithic.rs"]}],"files":["arguments.rs","cuda.rs","info.rs","lib.rs"]};
sourcesIndex["rustcoalescence_algorithms_cuda_kernel"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rustcoalescence_algorithms_cuda_kernel_ptx_jit"] = {"name":"","dirs":[{"name":"host","dirs":[{"name":"compiler","files":["mod.rs","preprocess.rs","regex.rs","replace.rs"]}],"files":["arguments.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["rustcoalescence_algorithms_cuda_kernel_specialiser"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rustcoalescence_algorithms_independent"] = {"name":"","files":["arguments.rs","lib.rs"]};
sourcesIndex["rustcoalescence_algorithms_monolithic"] = {"name":"","files":["arguments.rs","classical.rs","gillespie.rs","lib.rs","skipping_gillespie.rs"]};
sourcesIndex["rustcoalescence_scenarios"] = {"name":"","files":["almost_infinite.rs","lib.rs","non_spatial.rs","spatially_explicit.rs","spatially_implicit.rs"]};
createSourceSidebar();
